import { routeMap, getAlternatesForPath, normalizePath } from '@/lib/route-map'

describe('hreflang alternates', () => {
  it('has en, ja, x-default for each localized pair', () => {
    for (const pair of routeMap.localized) {
      const enAlt = getAlternatesForPath(pair.en)
      const jaAlt = getAlternatesForPath(pair.ja)
      expect(enAlt).toBeTruthy()
      expect(jaAlt).toBeTruthy()
      expect(normalizePath(enAlt!.en)).toBe(normalizePath(pair.en))
      expect(normalizePath(enAlt!.ja)).toBe(normalizePath(pair.ja))
      expect(normalizePath(jaAlt!.en)).toBe(normalizePath(pair.en))
      expect(normalizePath(jaAlt!.ja)).toBe(normalizePath(pair.ja))
    }
  })
})


