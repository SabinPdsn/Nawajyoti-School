import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'academics',
  title: 'Academic Program',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Program Name',
      type: 'string',
      description: 'Name of the academic program (e.g., Bachelor of Science, Master of Arts)',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the academic program',
      validation: (Rule) => Rule.required().min(10).max(500),
      rows: 4,
    }),
    defineField({
      name: 'years',
      title: 'Duration (Years)',
      type: 'number',
      description: 'Number of years to complete the program',
      validation: (Rule) => Rule.required().min(1).max(10),
    }),
    defineField({
      name: 'attachments',
      title: 'Attachments',
      type: 'array',
      description: 'Documents like syllabus, brochures, or other relevant files',
      of: [
        {
          type: 'file',
          title: 'File',
          options: {
            accept: '.pdf,.doc,.docx,.jpg,.jpeg,.png',
          },
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which programs should be displayed (lower numbers appear first)',
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
      title: 'Duration (Shortest First)',
      name: 'yearsAsc',
      by: [{ field: 'years', direction: 'asc' }],
    },
    {
      title: 'Duration (Longest First)',
      name: 'yearsDesc',
      by: [{ field: 'years', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      years: 'years',
    },
    prepare(selection) {
      const { title, subtitle, years } = selection
      return {
        title: title || 'Academic Program',
        subtitle: `${years ? `${years} year${years > 1 ? 's' : ''}` : 'No duration'} • ${subtitle || 'No description'}`,
      }
    },
  },
})
