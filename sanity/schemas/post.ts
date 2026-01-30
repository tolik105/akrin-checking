import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3, validation: Rule => Rule.max(160) }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 4 }),
    defineField({ name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }] }),
    defineField({ name: 'imageUrl', title: 'Image URL (Legacy)', type: 'string', description: 'Legacy image URL from migration' }),
    defineField({ name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
    defineField({ name: 'htmlContent', title: 'HTML Content (Legacy)', type: 'text', description: 'Original HTML content from migration' }),
    defineField({ name: 'author', title: 'Author', type: 'string', initialValue: 'AKRIN Expert' }),
    defineField({ name: 'authorRole', title: 'Author Role', type: 'string' }),
    defineField({ name: 'authorBio', title: 'Author Bio', type: 'text' }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime' }),
    defineField({ name: 'readTime', title: 'Read Time', type: 'string' }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
  ],
  preview: {
    select: { title: 'title', author: 'author', media: 'mainImage' },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
