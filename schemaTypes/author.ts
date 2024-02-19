import { defineField, defineType } from 'sanity'
export default defineType({
    title: 'Author',
    name: 'author',
    type: 'document',
    fields: [
        defineField({
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            title: 'Image',
            name: 'image',
            type: 'image',
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            title: 'Biography',
            name: 'biography',
            type: 'text',
            validation: (Rule: any) => Rule.required()
        }),
    ],
})