import { createClient } from "@sanity/client"

const client = createClient({
  projectId: "t424dnfi",
  dataset: "production",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
  apiVersion: "2024-01-01",
})

async function updateAuthors() {
  console.log("Fetching all posts...")
  
  const posts = await client.fetch(`*[_type == "post"]{ _id, title, author }`)
  
  console.log(`Found ${posts.length} posts. Updating authors to "AKRIN Expert"...\n`)
  
  for (const post of posts) {
    console.log(`Updating: ${post.title}`)
    console.log(`  Old author: ${post.author}`)
    
    await client.patch(post._id)
      .set({ 
        author: "AKRIN Expert",
        authorRole: "IT Solutions Team",
        authorBio: ""
      })
      .commit()
    
    console.log(`  ✓ Updated to: AKRIN Expert\n`)
  }
  
  console.log("✅ All posts updated!")
}

updateAuthors().catch(console.error)
