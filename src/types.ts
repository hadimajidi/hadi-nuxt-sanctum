
export interface Endpoints {
  csrf: string
  register: string[]
  register1: string
  register2: string
  login: string
  logout: string
  user: string
}

export interface Redirects {
  register: string
  register1: string
  register2: string
  home: string
  login: string
  logout: string
}

export interface ModuleOptions {
  csrf: CSRFSpec
  token: boolean
  baseUrl: string
  endpoints: Endpoints
  redirects: Redirects
}

export interface Auth {
  user: any | null
  loggedIn: boolean
  registered: string
  registered1: string
  registered2: string
  token: string | null
}

export interface CSRFSpec {
  headerKey: string
  cookieKey: string
  tokenCookieKey: string
}

export type ApiFetch = <T>(
  endpoint: string,
  options?: Object
) => Promise<T>

export type Csrf = Promise<void>

export type Callback = (response: any) => void

export interface hadiNuxtSanctumPlugin {
  register: (data: any, callback?: Callback | undefined) => Promise<void>
  register1: (data: any, callback?: Callback | undefined) => Promise<void>
  register2: (data: any, callback?: Callback | undefined) => Promise<void>
  login: (data: any, callback?: Callback | undefined) => Promise<void>
  logout: (callback?: Callback | undefined) => Promise<void>
  getUser<T>(): Promise<T | undefined>
}

// @ts-ignore
declare module 'vue/types/vue' {
  interface Vue {
    $NuxtsanctumAuth: hadiNuxtSanctumPlugin
  }
}

// Nuxt Bridge & Nuxt 3
declare module '#app' {
  interface NuxtApp extends PluginInjection { }
}

interface PluginInjection {
  $NuxtsanctumAuth: hadiNuxtSanctumPlugin
  $apiFetch: ApiFetch
  $csrf: Csrf
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends PluginInjection { }
}
