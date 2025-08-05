"use client"

import Image from 'next/image'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { urlForImage } from '@/sanity/lib/image'
import type { Image as SanityImage, PortableTextBlock } from 'sanity'

// Определяем кастомный объект 'components' с правильным типом
const components: PortableTextComponents = {
  types: {
    // Типизируем 'value' для изображений
    image: ({ value }: { value: SanityImage & { alt?: string } }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="relative my-6 aspect-video">
          <Image
            src={urlForImage(value).url()}
            alt={value.alt || ' '}
            fill
            className="object-contain rounded-lg"
          />
        </div>
      )
    },
  },
  block: {
    // Типизация для блока цитаты. TypeScript теперь сам поймет, что такое 'children'
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 my-4 italic">
        {children}
      </blockquote>
    ),
  },
}

// Главный компонент, который принимает массив блоков Portable Text
export function PortableTextComponent({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />
}