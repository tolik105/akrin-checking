import { normalizePath, getAlternatesForPath } from '@/lib/route-map'

describe('<html lang> alignment', () => {
  it('route map infers en for non-/ja paths and ja for /ja paths', () => {
    const enSample = '/services'
    const jaSample = '/ja/services'
    const enPair = getAlternatesForPath(enSample)
    const jaPair = getAlternatesForPath(jaSample)
    expect(enPair).toBeTruthy()
    expect(jaPair).toBeTruthy()
    expect(normalizePath(enPair!.en)).toBe('/services')
    expect(normalizePath(jaPair!.ja)).toBe('/ja/services')
  })
})


