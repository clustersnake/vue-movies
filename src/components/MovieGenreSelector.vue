<script setup lang="ts">
import { onMounted } from 'vue'
import { useMovieService } from '@/composables/services'
import { useSessionStore } from '@/stores/session'

const { genres, getGenres } = useMovieService()
const { selectGenre } = useSessionStore()

onMounted(async () => {
  await getGenres()
})

const click = (evt: Event) => {
  const target= evt.target as HTMLInputElement 
  selectGenre(target.value)
}
</script>
<template>
  <section>
    <label for="genres">Genre: </label>
    <select id="genres" name="genres" class="text-black mb-2" @change="click">
      <option v-for="genre in genres?.genres" :value="genre.id" :key="genre.id">
        {{ genre.name }}
      </option>
    </select>
  </section>
</template>

<style scoped></style>
