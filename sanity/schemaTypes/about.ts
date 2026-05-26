import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Internal title for organization in Sanity Studio',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
      description: 'Rich text content for the about introduction page',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'introduction',
    },
    prepare(selection) {
      const blocks = (selection.subtitle || []).filter(
        (block: any) => block._type === 'block'
      )
      const firstBlock = blocks[0]
      const subtitle = firstBlock
        ? firstBlock.children
            ?.filter((child: any) => child._type === 'span')
            ?.map((span: any) => span.text)
            ?.join('')
        : 'About page introduction content'

      return {
        title: selection.title || 'About Page Content',
        subtitle: subtitle || 'About page introduction content',
      }
    },
  },
})
