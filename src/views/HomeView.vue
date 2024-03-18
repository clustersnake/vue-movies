<script setup lang="ts">
import { ref, computed } from 'vue'
import MovieGenreSelector from '@/components/MovieGenreSelector.vue'
import { onMounted, onUpdated, watch } from 'vue'
import { useMovieService } from '@/composables/services'
import { useUrlHelper } from '@/composables/utils'
import { useSessionStore } from '@/stores/session'
const { getMovies, movies } = useMovieService()
const { getImageUrl } = useUrlHelper()

const session = useSessionStore()

onMounted(async () => {
  await getMovies(session.genre)
})

watch(session, async () => {
  await getMovies(session.genre)
})
</script>
<template>
  <article class="container mx-auto">
    <section>
      <MovieGenreSelector />
    </section>
    <section class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
      <article
        class="flex flex-col items-center border-2 rounded-lg cursor-pointer"
        :title="movie.title"
        v-for="movie in movies?.results"
        :key="movie.id"
      >
        <img
          class="rounded-t-lg mb-0 h-full w-full"
          :src="getImageUrl(movie.poster_path, 'w342')"
          :alt="movie.title"
        />
        <hr class="w-full" />
        <p class="w-full text-xl truncate text-ellipsis px-2 pb-2 hover:text-red-600">
          {{ movie.title }}
        </p>
      </article>
    </section>
  </article>
</template>
<style></style>
