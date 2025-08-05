import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 4, validation: (Rule) => Rule.required().max(200) }),
    defineField({ name: 'projectUrl', title: 'Project URL', type: 'url' }),
    defineField({ name: 'repositoryUrl', title: 'Repository URL', type: 'url' }),
    defineField({ name: 'content', title: 'Content', type: 'array', of: [{type: 'block'}] }),
  ],
})