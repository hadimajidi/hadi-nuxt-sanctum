import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { ModuleOptions, Csrf } from '../types'

export default defineNuxtPlugin((nuxtApp) => {
  console.log('Plugin injected by my-module!')
  const config: ModuleOptions = useRuntimeConfig().public.hadiNuxtSanctum

  // console.log(config)
  async function csrf(): Csrf {
    console.log("response----11111111-")
    await $fetch(config.endpoints.csrf, {
      baseURL: config.baseUrl,
      credentials: 'include',
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
  }
})
