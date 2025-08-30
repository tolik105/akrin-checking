import { getAlternatesForPath } from '@/lib/route-map'

describe('Sitemap generation via route map', () => {
  it('route map has alternates for representative paths', async () => {
    const candidates = ['/', '/services', '/ja/services']
    for (const p of candidates) {
      const pair = getAlternatesForPath(p)
      expect(pair).toBeTruthy()
    }
  })
})


