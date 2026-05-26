import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Main Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
      description: 'The main contact email address for the school',
    }),
    defineField({
      name: 'contactNumbers',
      title: 'Contact Numbers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
              description: 'e.g., Principal, Administration, Office',
            },
            {
              name: 'number',
              title: 'Phone Number',
              type: 'string',
              validation: (Rule) => Rule.required(),
              description: 'Phone number with country code if needed',
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'number',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
      description: 'Add contact numbers with their labels (Principal, Administration, etc.)',
    }),
    defineField({
      name: 'googleMapsLink',
      title: 'Google Maps Link',
      type: 'url',
      validation: (Rule) => Rule.required().uri({
        scheme: ['http', 'https'],
      }),
      description: 'Google Maps embed link for the school location',
    }),
    defineField({
      name: 'address',
      title: 'School Address',
      type: 'text',
      rows: 3,
      description: 'Full address of the school (optional - for display purposes)',
    }),
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'address',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title: `Contact: ${title || 'No email set'}`,
        subtitle: subtitle || 'No address set',
      }
    },
  },
})
