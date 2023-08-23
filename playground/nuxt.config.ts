export default defineNuxtConfig({
  hadiNuxtSanctum: {
    token: false,
    baseUrl: 'http://localhost:7000',
    endpoints: {
      csrf: '/sanctum/csrf-cookie',
      register: '/register',
      register1: '/register1',
      register2: '/register2',
      login: '/login',
      logout: '/logout',
      user: '/user'
    },
    csrf: {
      headerKey: 'X-XSRF-TOKEN',
      cookieKey: 'XSRF-TOKEN',
      tokenCookieKey: 'nuxt-sanctum-auth-token'
    },
    redirects: {
      home: '/',
      register: '/register',
      register1: '/register1',
      register2: '/register2',
      login: '/login',
      logout: '/logout'
    }
  },
  modules: ['../src/module',
    // {
    //   token: false,
    //   baseUrl: 'http://localhost:7000',
    //   endpoints: {
    //     csrf: '/sanctum/csrf-cookie',
    //     register: '/register',
    //     register1: '/register1',
    //     register2: '/register2',
    //     login: '/login',
    //     logout: '/logout',
    //     user: '/user'
    //   },
    //   csrf: {
    //     headerKey: 'X-XSRF-TOKEN',
    //     cookieKey: 'XSRF-TOKEN',
    //     tokenCookieKey: 'nuxt-sanctum-auth-token'
    //   },
    //   redirects: {
    //     home: '/',
    //     register: '/register',
    //     register1: '/register1',
    //     register2: '/register2',
    //     login: '/login',
    //     logout: '/logout'
    //   }
    // }
  ],
  // myModule: {},
  devtools: { enabled: true }
})
