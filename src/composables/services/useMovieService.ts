import { ref } from 'vue'
import type { MovieResponse, MovieService, GenreResponse } from '@/types'
import { useUrlHelper } from '@/composables/utils'

const useMovieService = (): MovieService => {
  const { headers, urlBuilder } = useUrlHelper()

  const gen = ref<Array<string>>([]);


  const movies = ref<MovieResponse>()
  const genres = ref<GenreResponse>()

  const getMovies = async (genre: string): Promise<void> => {
    const response = await fetch(urlBuilder('movie', 'discover', genre), { headers })
    movies.value = await response.json()
  }
  const getGenres = async (): Promise<void> => {
    const response = await fetch(urlBuilder('movie/list', 'genre'), { headers })
    genres.value = await response.json()
  }

  return { movies, genres, getMovies, getGenres }
}
export default useMovieService
