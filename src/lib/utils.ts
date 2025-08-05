import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanity.client'
import type { Image as SanityImage } from 'sanity' // <-- ИМПОРТ

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImage) { // <-- ИСПОЛЬЗУЕМ ТИП
  return builder.image(source)
}