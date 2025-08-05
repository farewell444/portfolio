'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {structure} from './src/sanity/structure'

// --- НАШИ СХЕМЫ ---
// Мы импортируем каждую схему, которую создали
import post from '@/sanity/schemas/post'
import project from '@/sanity/schemas/project'
import siteSettings from '@/sanity/schemas/siteSettings'

// Мы БОЛЬШЕ НЕ ИМПОРТИРУЕМ 'schema' из './src/sanity/schemaTypes', так как определяем ее вручную

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  
  // --- ЯВНОЕ ОПРЕДЕЛЕНИЕ СХЕМЫ ---
  // Вместо того чтобы использовать переменную 'schema', мы создаем объект схемы здесь
  // и передаем в массив 'types' все наши импортированные схемы.
  schema: {
    types: [post, project, siteSettings],
  },

  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})