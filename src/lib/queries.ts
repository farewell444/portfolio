import { groq } from 'next-sanity'

// Запрос для получения всех постов, отсортированных по дате публикации
export const POSTS_QUERY = groq`*[_type == "post"] | order(publishedAt desc)`

// Запрос для получения одного поста по его slug (уникальному идентификатору в URL)
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`

// Запрос для получения всех проектов
export const PROJECTS_QUERY = groq`*[_type == "project"] | order(_createdAt desc)`

// Запрос для получения глобальных настроек сайта
export const SITE_SETTINGS_QUERY = groq`*[_type == "siteSettings"][0]`