<script setup lang="ts">
import useMovieService from '@/composables/services/useMovieService'
import { ref, onMounted } from 'vue'
const { getMovies } = useMovieService()
const data = ref<any>({})
const movies = ref<any[]>([])

// const load = async () => {
//   movies.value = await getMovies()
// }

// load()

onMounted(async () => {
  data.value = await getMovies()
  movies.value = data.value.results
  console.log(data.value)
})
</script>
<template>
  <div class="about">
    <h1>This is an about page!</h1>
    <pre>
  {{ movies }}
  </pre
    >
    <section>
      <article v-for="movie in movies" :key="movie.id">
        <img :src="movie.poster_path" :alt="movie.title" />
        <p>
          {{ movie.title }}
        </p>
      </article>
    </section>
  </div>
</template>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
