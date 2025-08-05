import { createClient } from 'next-sanity'

// 1. Убираем 'useCdn' из этого импорта, так как его там нет
import { apiVersion, dataset, projectId } from '@/sanity/env'

// 2. Определяем логику для useCdn прямо здесь
// Эта переменная будет true, если проект запущен в продакшене, и false в остальных случаях
const useCdn = process.env.NODE_ENV === 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // 3. Используем нашу локально определенную переменную
  useCdn,
})