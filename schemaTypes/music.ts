import { defineField, defineType } from 'sanity'

export default defineType({
    title: 'Music',
    name: 'music',
    type: 'document',
    fields: [
        defineField({
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            title: 'Slug',
            name: 'slug',
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            title: 'Artist',
            name: 'artist',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'author' }] }],
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            title: 'Album',
            name: 'album',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            title: 'Music Image',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            title: 'Music File',
            name: 'music',
            type: 'file',
            options: {
                accept: 'audio/*',
            },

            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            title: 'Price',
            name: 'price',
            type: 'number',
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            title: 'Genre',
            name: 'genre',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'genre' }] }],
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            title: 'Mood',
            name: 'mood',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'mood' }] }],
            validation: (Rule: any) => Rule.required()
        }),

    ],
})
