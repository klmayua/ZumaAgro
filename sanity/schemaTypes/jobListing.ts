import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'jobListing',
  title: 'Job Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Operations', value: 'operations' },
          { title: 'Sales', value: 'sales' },
          { title: 'Technology', value: 'technology' },
          { title: 'Finance', value: 'finance' },
          { title: 'HR', value: 'hr' },
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'full-time' },
          { title: 'Part-time', value: 'part-time' },
          { title: 'Contract', value: 'contract' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'isActive',
      title: 'Active Listing',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'postedAt',
      title: 'Posted Date',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
    }),
  ],
})
