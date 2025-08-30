'use client'

interface SocialShareButtonsProps {
  title: string
  url?: string
  language?: 'en' | 'ja'
}

export function SocialShareButtons({ title, url, language = 'en' }: SocialShareButtonsProps) {
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    window.open(linkedInUrl, '_blank', 'width=600,height=400')
  }

  const handleTwitterShare = () => {
    const text = encodeURIComponent(`${title} - ${shareUrl}`)
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}`
    window.open(twitterUrl, '_blank', 'width=600,height=400')
  }

  const handleEmailShare = () => {
    const subject = encodeURIComponent(
      language === 'ja' ? `この記事をご覧ください: ${title}` : `Check out this article: ${title}`
    )
    const body = encodeURIComponent(
      (language === 'ja'
        ? `この記事は興味深いと思います:\n\n${title}\n${shareUrl}`
        : `I thought you might find this interesting:\n\n${title}\n${shareUrl}`)
    )
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  return (
    <div className="flex items-center gap-3 mb-8 py-4">
      <span className="text-sm font-medium text-gray-700">{language === 'ja' ? '共有:' : 'Share:'}</span>

      {/* LinkedIn Button */}
      <button
        onClick={handleLinkedInShare}
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 hover:bg-teal-600 transition-colors duration-200 text-white font-bold text-sm"
        title={language === 'ja' ? 'LinkedInで共有' : 'Share on LinkedIn'}
        aria-label={language === 'ja' ? 'この記事をLinkedInで共有' : 'Share this article on LinkedIn'}
      >
        in
      </button>

      {/* Twitter Button */}
      <button
        onClick={handleTwitterShare}
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 hover:bg-teal-600 transition-colors duration-200 text-white font-bold text-sm"
        title={language === 'ja' ? 'Xで共有' : 'Share on Twitter'}
        aria-label={language === 'ja' ? 'この記事をXで共有' : 'Share this article on Twitter'}
      >
        𝕏
      </button>

      {/* Email Button */}
      <button
        onClick={handleEmailShare}
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 hover:bg-teal-600 transition-colors duration-200 text-white font-bold text-lg"
        title={language === 'ja' ? 'メールで共有' : 'Share via Email'}
        aria-label={language === 'ja' ? 'この記事をメールで共有' : 'Share this article via email'}
      >
        ✉
      </button>
    </div>
  )
}
