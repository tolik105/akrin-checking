import Link from 'next/link'

type RelatedLink = { href: string; label: string }

export function RelatedLinks({ links, title = 'Related links' }: { links: RelatedLink[]; title?: string }) {
  if (!links?.length) return null
  return (
    <aside className="mt-10 text-sm text-gray-700">
      <h2 className="sr-only">{title}</h2>
      <nav className="flex flex-wrap gap-3" aria-label={title}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="underline hover:text-[hsl(var(--primary))]">
            {l.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}



