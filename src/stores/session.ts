import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import {useRoute, useRouter} from 'vue-router';

export const useSessionStore = defineStore('session', () => {
  const genre = ref('')
  const userData = reactive({
    email: '',
    authenticated: false
  })

  const route = useRoute();
  const router = useRouter();
  const login = (email: string) => {

    userData.email = email
    userData.authenticated = true
    router.push(route.query.redirect as string || '/');
  }
  const logout = () => {
    userData.email = '';
    userData.authenticated = false;
  }

  // const currentGenre = computed(():string => genre.value)

  function selectGenre(id: string) {
    genre.value = id
  }

  return { genre, selectGenre, userData, login , logout}
})

export default useSessionStore;
