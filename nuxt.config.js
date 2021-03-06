const builtAt = new Date().toISOString()

module.exports = {
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { hid: 'author', name: 'author', content: 'Acidiney Dias <acidineydias@gmail.com>' },
      { hid: 'application-name', name: 'application-name', content: 'Acidiney Dias Website' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#212121' },
      { name: 'theme-color', content: '#212121' },
      { name: 'robots', content: 'index, blog, follow' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@acidineydias' },
      { name: 'linkedin:site', content: 'acidineydias' },
      { name: 'medium:site', content: '@acidiney' },
      { name: 'github:site', content: 'acidiney' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:updated_time', content: builtAt }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon/android-chrome-96x96.png', sizes: '96x96' },
      { rel: 'icon', type: 'image/png', href: '/favicon/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-57x57.png', sizes: '57x57' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-60x60.png', sizes: '60x60' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-72x72.png', sizes: '72x72' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-76x76.png', sizes: '76x76' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-114x114.png', sizes: '114x114' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-120x120.png', sizes: '120x120' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-144x144.png', sizes: '144x144' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-152x152.png', sizes: '152x152' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-180x180.png', sizes: '180x180' },
      { rel: 'mask-icon', type: 'image/png', href: '/favicon/safari-pinned-tab.svg', color: '#c1c1c1' },
      { rel: 'stylesheet', type: 'text/css', href: '/style.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/@theme/css/index.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/@theme/css/_dark.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/@theme/css/_light.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/title.component.js',
    '~/plugins/project-item.component.js',
    { src: '~/plugins/infiniteScroll.js', mode: 'client' },
    { src: '~/plugins/localStorage.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_APP
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxt/image',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
    '@nuxtjs/toast',
    '@nuxtjs/axios',
    'nuxt-i18n'
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'en',
        file: 'en-US.js'
      },
      {
        code: 'pt',
        name: 'pt',
        iso: 'pt-PT',
        file: 'pt-PT.js'
      }
    ],
    lazy: true,
    baseUrl: 'https://acidineydias.me',
    seo: true,
    langDir: 'lang/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true // recommended
    },
    defaultLocale: 'pt'
  },

  env: {
    SERVICE_ID: process.env.SERVICE_ID,
    USER_ID: process.env.USER_ID,
    GOOGLE_ANALYTICS_APP: process.env.GOOGLE_ANALYTICS_APP
  },

  sitemap: {
    hostname: 'https://acidineydias.me',
    lastmod: builtAt,
    routes: []
  },

  pwa: {
    manifest: {
      name: 'Acidiney Dias | Full stack developer',
      short_name: 'Acidiney Dias',
      lang: 'en',
      theme_color: '#212121',
      background_color: '#212121',
      twitterCreator: '@acidineydias'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    }
  }
}
