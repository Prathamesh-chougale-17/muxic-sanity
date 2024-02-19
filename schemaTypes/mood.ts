import { defineField, defineType } from 'sanity'

export default defineType({
    title: 'Mood',
    name: 'mood',
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
            title: "Mood Image",
            name: "image",
            type: "image",
            options: {
                hotspot: true,
            },
        })
    ],
})