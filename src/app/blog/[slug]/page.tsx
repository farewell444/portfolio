import { client } from '@/lib/sanity.client'
import { POST_QUERY, POSTS_QUERY } from '@/lib/queries'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { format } from 'date-fns'
import { PortableTextComponent } from '@/components/PortableTextComponent'
import type { Metadata } from 'next'
import { Post } from '@/lib/types'

// Мы типизируем 'params' напрямую в каждой функции, используя самый простой и правильный синтаксис.
// Это устраняет любые конфликты с внутренними типами Next.js.

// Генерируем мета-теги для конкретного поста
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await client.fetch<Post>(POST_QUERY, { slug: params.slug })
  if (!post) return notFound()

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [urlForImage(post.coverImage).width(1200).height(630).url()],
    },
  }
}

// Генерируем все возможные страницы постов во время сборки
export async function generateStaticParams() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY)
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

// Компонент страницы
export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch<Post>(POST_QUERY, { slug: params.slug })

  if (!post) {
    return notFound()
  }

  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{post.title}</h1>
      <p className="text-muted-foreground text-lg mb-8">
        {format(new Date(post.publishedAt), 'PPP')}
      </p>
      
      <div className="relative aspect-video mb-12">
        <Image 
          src={urlForImage(post.coverImage).url()} 
          alt={post.title} 
          fill 
          className="object-cover rounded-lg" 
        />
      </div>
      
      <PortableTextComponent value={post.content} />
    </article>
  )
}