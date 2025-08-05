import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { urlForImage } from '@/sanity/lib/image'
import { Post } from '@/lib/types' // <-- ИМПОРТ

// Удаляем старый interface

export function PostCard({ post }: { post: Post }) { // <-- ИСПОЛЬЗУЕМ ТИП
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <Card className="flex flex-col h-full hover:border-primary transition-colors">
        <CardHeader className="p-0">
          <div className="relative aspect-video">
            {post.coverImage ? (
              <Image
                src={urlForImage(post.coverImage).width(500).height(281).url()}
                alt={post.title}
                fill
                className="object-cover rounded-t-lg"
              />
            ) : (
              <div className="w-full h-full bg-muted rounded-t-lg flex items-center justify-center">
                No Image
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="mb-2 text-lg">{post.title}</CardTitle>
          <p className="text-muted-foreground text-sm mb-4">
            {format(new Date(post.publishedAt), 'PPP')}
          </p>
          <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  )
}