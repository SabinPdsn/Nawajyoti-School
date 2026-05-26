import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'staff',
  title: 'Staff Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
      description: 'Full name of the staff member',
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
      description: 'Job title or position (e.g., Principal, Teacher, Admin Staff)',
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
      description: 'Department or subject area (e.g., Mathematics, Administration, Science)',
    }),
    defineField({
      name: 'contactNumber',
      title: 'Contact Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Phone number with country code if needed',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
      description: 'Email address of the staff member',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which staff members appear (lower numbers first)',
      validation: (Rule) => Rule.min(0).integer(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'designation',
      department: 'department',
    },
    prepare(selection) {
      const { title, subtitle, department } = selection
      return {
        title: title || 'Untitled',
        subtitle: `${subtitle || 'No designation'} • ${department || 'No department'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Order (Low to High)',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Name (A to Z)',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
    {
      title: 'Department',
      name: 'departmentAsc',
      by: [{ field: 'department', direction: 'asc' }],
    },
  ],
})
