import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  basePath: '/studio',
  name: 'akrin_content',
  title: 'Akrin Content Studio',
  projectId: 't424dnfi',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
})
