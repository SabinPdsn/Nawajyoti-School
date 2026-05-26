import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'downloads',
  title: 'Download Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the downloadable item',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the downloadable item',
      validation: (Rule) => Rule.required().min(10).max(300),
      rows: 3,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Category of the downloadable item',
      options: {
        list: [
          { title: 'Syllabus', value: 'syllabus' },
          { title: 'Forms', value: 'forms' },
          { title: 'Reports', value: 'reports' },
          { title: 'Workshops', value: 'workshops' },
          { title: 'Books', value: 'books' },
          { title: 'Journals', value: 'journals' },
          { title: 'Guidelines', value: 'guidelines' },
          { title: 'Policies', value: 'policies' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Date when the item was published or updated',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      description: 'PDF or image file to download',
      options: {
        accept: '.pdf,.jpg,.jpeg,.png',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which items should be displayed (lower numbers appear first)',
      validation: (Rule) => Rule.min(0),
    }),
  ],
  orderings: [
    {
      title: 'Order (Ascending)',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Order (Descending)',
      name: 'orderDesc',
      by: [{ field: 'order', direction: 'desc' }],
    },
    {
      title: 'Date (Newest First)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Date (Oldest First)',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
    {
      title: 'Name (A-Z)',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
    {
      title: 'Name (Z-A)',
      name: 'nameDesc',
      by: [{ field: 'name', direction: 'desc' }],
    },
    {
      title: 'Category (A-Z)',
      name: 'categoryAsc',
      by: [{ field: 'category', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      category: 'category',
      date: 'date',
    },
    prepare(selection) {
      const { title, subtitle, category, date } = selection
      const categoryTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Download'
      const formattedDate = date ? new Date(date).toLocaleDateString() : 'No date'
      
      return {
        title: title || 'Download Item',
        subtitle: `${categoryTitle} • ${formattedDate} • ${subtitle || 'No description'}`,
      }
    },
  },
})
