import webpack from 'webpack'

export default {
  target: 'static',
  ssr: true,
  head: {
    htmlAttrs: {
      lang: process.env.NUXT_LOCALE,
      dir: ['fa', 'ar', 'he'].includes(process.env.NUXT_LOCALE) ? 'rtl' : 'ltr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Emrin Angelov'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@cyberlypse' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://emrinangelov.com/card.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://emrinangelov.com/card.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Emrin Angelov'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://emrinangelov.com/card.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' }
    ],
    bodyAttrs: {
      class: [
        'font-sans font-medium bg-light-surface dark:bg-dark-surface text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear'
      ]
    }
  },
  pwa: {
    manifest: {
      name: 'Emrin Angelov',
      description: "Emrin Angelov's official website",
      theme_color: '#379bea'
    }
  },
  build: {
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
      })
    ]
  }

  // // For deploying at Github Pages without a CNAME
  // router: {
  //   base: process.env.NODE_ENV === 'production' ? '/emrinangelov.com/' : '/'
  // },

  // // DEV MODE with HMR on Docker:
  // // 1. Delete node_modules (and maybe yarn.lock) because Linux
  // // docker run -dp 3000:3000 -w /app -v "$(pwd):/app" --env HOST=0.0.0.0
  // // --env PORT=3000 node:alpine sh -c "yarn install && yarn dev"
  // // And have this set to fix HMR.
  // watchers: {
  //   webpack: {
  //     aggregateTimeout: 300,
  //     poll: 1000
  //   }
  // },

  // // PROD MODE on K8S:
  // // 1. Build a prod image with Dockerfile (and dockerignore)
  // // 2. Create a YAML file for its deployment and service
  // // 3. kubectl apply -f frontend.yaml
}
