import { createClient } from "@sanity/client"
import { blogPostsEN } from "../lib/blog-data"

const client = createClient({
  projectId: "t424dnfi",
  dataset: "production",
  token: "skTVpaOyaQlU1gKSwEfv1cAZFJN1AwGQx740RyoLJmHBdCjUGuDV1gwOCCKoxxH75di13Z75FpnzuU6OdomexgdjowO3ND8Ion0B3IVdLzImu4pWXUgiYIi8dy0fADdqFmy4pDMOW89caETLVxi9HhB7insTjzL1Yp9ktpKTyR7miBjjUU2T",
  useCdn: false,
  apiVersion: "2024-01-01",
})

async function migrateBlogPosts() {
  console.log("Starting migration...")
  
  for (const slug in blogPostsEN) {
    const post = blogPostsEN[slug as keyof typeof blogPostsEN]
    console.log(`Migrating: ${post.title}`)
    
    try {
      const newPost = {
        _type: "post",
        _id: `post-${post.slug}`,
        title: post.title,
        slug: { _type: "slug", current: post.slug },
        metaDescription: post.metaDescription || "",
        excerpt: post.excerpt || "",
        imageUrl: post.image || "",
        htmlContent: post.content || "",
        author: post.author || "AKRIN Expert",
        authorRole: post.authorRole || "",
        authorBio: post.authorBio || "",
        publishedAt: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
        readTime: post.readTime || "5 min read",
        category: post.category || "",
        tags: post.tags || [],
      }
      
      await client.createOrReplace(newPost)
      console.log(`  ✓ Success: ${post.title}`)
    } catch (error) {
      console.error(`  ✗ Failed: ${post.title}`, error)
    }
  }
  
  console.log("\n✅ Migration complete!")
}

migrateBlogPosts()
