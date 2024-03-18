import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', () => {
  const genre = ref('')

  // const currentGenre = computed(():string => genre.value)

  function selectGenre(id: string) {
    genre.value = id
  }

  return { genre, selectGenre }
})
