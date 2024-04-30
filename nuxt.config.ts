// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
  },
  ssr: true,
  app: {
    head: {
      title: 'Nuxt3-Vuetify3-starter',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Nuxt3-Vuetify3-starter' },
        { name: 'google', content: 'notranslate' }
      ],
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  modules: ["vuetify-nuxt-module", "@nuxtjs/i18n", "@pinia/nuxt"],
  plugins: ['~/plugins/vue3-toastify.ts'],
  pinia: {
    // @ts-ignore
    autoImports: ['defineStore']
  },
  imports: {
    dirs: ['stores']
  },
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        name: 'English',
        dir: 'ltr'
      },
      {
        code: 'ar',
        iso: 'ar-SA',
        file: 'ar.json',
        name: 'العربية',
        dir: 'rtl'
      }
    ],
    langDir: 'locales/',
    lazy: true,
    strategy: 'prefix_except_default',
    defaultLocale: 'ar',
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts'
  },
  css: ['~/assets/styles/main.scss'],
  features: {
    inlineStyles: false,
  },
  vuetify: {
    moduleOptions: {
      styles: {
        configFile: '/assets/styles/vuetify/settings.scss'
      }
    },
    vuetifyOptions: {
      defaults: {
        
      },
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            colors: {
              "primary-50": "#ebf1fb",
              "primary-75": "#adc7ef",
              "primary-100": "#8bb0e8",
              "primary-200": "#598dde",
              "primary-300": "#3776d7",
              "primary-400": "#275397",
              "primary-500": "#224883",
              "neutral-50": "#eaebec",
              "neutral-75": "#a9abaf",
              "neutral-100": "#85898e",
              "neutral-200": "#51565d",
              "neutral-300": "#2d333c",
              "neutral-400": "#1f242a",
              "neutral-500": "#1b1f25",
            },
            variables: {

            }
          }
        }
      }
    }
  },
  experimental: {
    defaults: {
      nuxtLink: {
        activeClass: 'router-link-active',
        exactActiveClass: 'router-link-exact-active'
      }
    }
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
        @use "@/assets/styles/variables" as *;
        @use "@/assets/styles/global" as *;
      `,
        },
      },
    },
  },
})