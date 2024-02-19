import { defineField, defineType } from 'sanity'

export default defineType({
    title: 'Genre',
    name: 'genre',
    type: 'document',
    fields: [
        defineField({
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            title: "Genre Image",
            name: "image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule: any) => Rule.required()
        })
    ],
})