import { client } from '@/lib/sanity.client'
import { POSTS_QUERY } from '@/lib/queries'
import { PostCard } from '@/components/PostCard'
import type { Metadata } from 'next'
import { Post } from '@/lib/types' // <-- ИМПОРТ

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
}

export const revalidate = 30

export default async function BlogPage() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY) // <-- ТИП

  return (
    <div className="px-4">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      {posts && posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  )
}