const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}

module.exports = config