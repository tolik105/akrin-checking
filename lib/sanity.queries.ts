import { groq } from "next-sanity"

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  metaDescription,
  excerpt,
  "mainImage": mainImage{
    "asset": asset->{url},
    alt
  },
  imageUrl,
  htmlContent,
  author,
  authorRole,
  publishedAt,
  readTime,
  category,
  tags
}`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  metaDescription,
  excerpt,
  "mainImage": mainImage{
    "asset": asset->{url},
    alt
  },
  imageUrl,
  htmlContent,
  content,
  author,
  authorRole,
  authorBio,
  publishedAt,
  readTime,
  category,
  tags
}`
