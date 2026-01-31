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

// Case Studies Queries
export const caseStudiesQuery = groq`*[_type == "caseStudy"] | order(order asc, publishedAt desc) {
  _id,
  slug,
  titleEN,
  titleJA,
  categoryEN,
  categoryJA,
  excerptEN,
  excerptJA,
  metaDescriptionEN,
  metaDescriptionJA,
  "mainImage": mainImage{
    "asset": asset->{url},
    alt,
    altJA,
    caption
  },
  imageUrl,
  metrics,
  tags,
  publishedAt,
  order,
  featured
}`

export const caseStudyBySlugQuery = groq`*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  slug,
  titleEN,
  titleJA,
  categoryEN,
  categoryJA,
  excerptEN,
  excerptJA,
  metaDescriptionEN,
  metaDescriptionJA,
  "mainImage": mainImage{
    "asset": asset->{url},
    alt,
    altJA,
    caption
  },
  imageUrl,
  htmlContentEN,
  htmlContentJA,
  metrics,
  tags,
  publishedAt,
  order,
  featured
}`
