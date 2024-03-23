import { ref, shallowRef, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import type { Component } from 'vue'
import layouts from '@/layouts'

export const useSessionStore = defineStore('session', () => {
  const genre = ref('')
  const layout = shallowRef<Component | null>(null)
  const userData = reactive({
    email: '',
    authenticated: false
  })

  const route = useRoute()
  const router = useRouter()
  const login = (email: string) => {
    userData.email = email
    userData.authenticated = true
    layout.value = layouts['MainLayout']

    router.push((route.query.redirect as string) || '/')
  }
  const logout = () => {
    userData.email = ''
    userData.authenticated = false
    layout.value = layouts['PlainLayout']
  }
  const setLayout = (l: string) => {
    layout.value = layouts[l as keyof typeof layouts]
  }

  function selectGenre(id: string) {
    genre.value = id
  }

  return { genre, selectGenre, userData, login, logout, layout, setLayout }
})

export default useSessionStore
