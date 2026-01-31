import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    // Unique identifier
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'titleEN', maxLength: 96 },
      validation: Rule => Rule.required()
    }),

    // Bilingual titles
    defineField({
      name: 'titleEN',
      title: 'Title (English)',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'titleJA',
      title: 'Title (Japanese)',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    // Bilingual categories
    defineField({
      name: 'categoryEN',
      title: 'Category (English)',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'categoryJA',
      title: 'Category (Japanese)',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    // Bilingual excerpts (short descriptions for cards)
    defineField({
      name: 'excerptEN',
      title: 'Excerpt (English)',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'excerptJA',
      title: 'Excerpt (Japanese)',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    }),

    // Bilingual meta descriptions (for SEO)
    defineField({
      name: 'metaDescriptionEN',
      title: 'Meta Description (English)',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(160)
    }),
    defineField({
      name: 'metaDescriptionJA',
      title: 'Meta Description (Japanese)',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(200) // Japanese can be longer
    }),

    // Main hero image
    defineField({
      name: 'mainImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text (English)'
        },
        {
          name: 'altJA',
          type: 'string',
          title: 'Alt Text (Japanese)'
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption'
        }
      ]
    }),

    // Legacy image URL (for existing images in public folder)
    defineField({
      name: 'imageUrl',
      title: 'Image URL (Legacy)',
      type: 'string',
      description: 'Path to hero image in public folder (e.g., /images/case-studies/...)'
    }),

    // Bilingual HTML content (converted from MDX)
    defineField({
      name: 'htmlContentEN',
      title: 'Content (English HTML)',
      type: 'text',
      description: 'Full case study content in HTML format'
    }),
    defineField({
      name: 'htmlContentJA',
      title: 'Content (Japanese HTML)',
      type: 'text',
      description: 'Full case study content in HTML format'
    }),

    // Metrics (displayed as badges on cards)
    defineField({
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Short metric badges like "−28% tickets", "98.7% SLA"'
    }),

    // Tags for filtering/SEO
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' }
    }),

    // Publication date
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    }),

    // Display order (for manual sorting if needed)
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first'
    }),

    // Featured flag
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Show this case study prominently'
    }),
  ],
  preview: {
    select: {
      title: 'titleEN',
      subtitle: 'categoryEN',
      media: 'mainImage'
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        ...selection,
        title: title,
        subtitle: subtitle ? `Category: ${subtitle}` : ''
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    },
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }]
    }
  ]
})
