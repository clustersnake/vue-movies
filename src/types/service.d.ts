import type { Ref } from 'vue'
import type { MovieResponse } from './movie.d'

export interface MovieService {
  movies: Ref<MovieResponse | undefined>
  getMovies: (genre: string) => Promise<void>
  genres: Ref<GenreResponse | undefined>
  getGenres: () => Promise<void>
}
