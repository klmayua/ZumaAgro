import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'download',
  title: 'Download',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Annual Report', value: 'annual-report' },
          { title: 'Brochure', value: 'brochure' },
          { title: 'Presentation', value: 'presentation' },
          { title: 'Form', value: 'form' },
          { title: 'Media Kit', value: 'media-kit' },
        ],
      },
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
    }),
    defineField({
      name: 'fileSize',
      title: 'File Size',
      type: 'string',
      description: 'e.g., "4.2 MB"',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
    }),
  ],
})
