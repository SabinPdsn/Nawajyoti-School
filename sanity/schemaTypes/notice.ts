import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'notice',
  title: 'Notice',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Notice Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
      description: 'The main title of the notice',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().min(10),
      description: 'Detailed description of the notice',
    }),
    defineField({
      name: 'attachment',
      title: 'Attachment',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.webp',
      },
      fields: [
        {
          name: 'description',
          type: 'string',
          title: 'Attachment Description',
          description: 'Brief description of the attachment (e.g., "Exam Schedule PDF")',
        },
      ],
      description: 'Upload a file or image attachment (PDF, Word docs, images)',
    }),
    defineField({
      name: 'pinned',
      title: 'Pin Notice',
      type: 'boolean',
      initialValue: false,
      description: 'Pinned notices appear at the top of the notice board',
    }),
    defineField({
      name: 'datePosted',
      title: 'Date Posted',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
      description: 'When this notice was posted',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Academic', value: 'academic' },
          { title: 'Examination', value: 'examination' },
          { title: 'Event', value: 'event' },
          { title: 'Holiday', value: 'holiday' },
          { title: 'Sports', value: 'sports' },
          { title: 'Library', value: 'library' },
          { title: 'Transport', value: 'transport' },
          { title: 'Fee', value: 'fee' },
          { title: 'Emergency', value: 'emergency' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'general',
      description: 'Categorize the notice for better organization',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      pinned: 'pinned',
      datePosted: 'datePosted',
      attachment: 'attachment',
    },
    prepare(selection) {
      const { title, category, pinned, datePosted, attachment } = selection
      const date = datePosted ? new Date(datePosted).toLocaleDateString() : 'No date'
      const pinnedIcon = pinned ? '📌 ' : ''
      const attachmentIcon = attachment ? '📎 ' : ''
      
      return {
        title: `${pinnedIcon}${title}`,
        subtitle: `${attachmentIcon}${category} • ${date}`,
        media: attachment,
      }
    },
  },
  orderings: [
    {
      title: 'Pinned First, Then by Date (Newest)',
      name: 'pinnedDateDesc',
      by: [
        { field: 'pinned', direction: 'desc' },
        { field: 'datePosted', direction: 'desc' },
      ],
    },
    {
      title: 'Date Posted (Newest First)',
      name: 'dateDesc',
      by: [{ field: 'datePosted', direction: 'desc' }],
    },
    {
      title: 'Category',
      name: 'category',
      by: [{ field: 'category', direction: 'asc' }],
    },
  ],
})
