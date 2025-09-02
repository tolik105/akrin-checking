// Route-level performance hints for /blog (safe for static data)
// No SEO or visual changes.

export const dynamic = 'force-static'
export const revalidate = 3600 // ISR hourly, adjust if content frequency changes

