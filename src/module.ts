import { defineNuxtModule, addPlugin, createResolver, addImports } from '@nuxt/kit'

// Module options TypeScript interface definition
import { ModuleOptions } from './types'

// export interface ModuleOptions { }

const defaults: ModuleOptions = {
  token: false,
  baseUrl: 'http://localhost:8000',
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
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'hadi-nuxt-sanctum',
    configKey: 'hadiNuxtSanctum',
    version: "1.0.0",
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  // Default configuration options of the Nuxt module
  // defaults: {},
  defaults,
  setup(options, nuxt) {
    nuxt.options.runtimeConfig.public.hadiNuxtSanctum = options
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
    addImports({
      name: 'Hadiauth',
      as: 'Hadiauth',
      from: resolver.resolve('runtime/plugin/composables.ts')
    })
  }
})
