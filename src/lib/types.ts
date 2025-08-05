import type { Image as SanityImage, PortableTextBlock } from 'sanity'

// Базовый тип для всех документов Sanity
type Base = {
  _id: string;
  _createdAt: string;
  _rev: string;
  _updatedAt: string;
}

// Тип для Поста
export interface Post extends Base {
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  coverImage: SanityImage;
  publishedAt: string;
  excerpt: string;
  content: PortableTextBlock[]; // <-- ИСПРАВЛЕНО
}

// Тип для Проекта
export interface Project extends Base {
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  coverImage: SanityImage;
  excerpt: string;
  content: PortableTextBlock[]; // <-- ИСПРАВЛЕНО
  projectUrl?: string;
  repositoryUrl?: string;
}

// Тип для Настроек Сайта
export interface SiteSettings extends Base {
  title: string;
  description: string;
  ogImage: SanityImage;
  contactEmail: string;
}