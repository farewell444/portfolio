import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity.client'
import { POSTS_QUERY, PROJECTS_QUERY } from '@/lib/queries'
import { Post, Project } from '@/lib/types' // <-- ИМПОРТ

const BASE_URL = 'https://your-domain.com' 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch<Post[]>(POSTS_QUERY) // <-- ТИП
  const projects = await client.fetch<Project[]>(PROJECTS_QUERY) // <-- ТИП

  const postUrls = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
  }))

  const projectUrls = projects.map((project) => ({
    url: `${BASE_URL}/projects`,
    lastModified: new Date(project._updatedAt),
  }))

  const staticUrls = [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/blog`, lastModified: new Date() },
    { url: `${BASE_URL}/projects`, lastModified: new Date() },
    { url: `${BASE_URL}/contact`, lastModified: new Date() },
  ]

  return [...staticUrls, ...postUrls, ...projectUrls]
}