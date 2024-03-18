import type { Ref } from 'vue'
export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: [number]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
export interface Genre {
  id: number
  name: string
}
export interface MovieResponse {
  page: number
  results: [Movie]
  total_pages: number
  total_results: number
}
export interface GenreResponse {
  genres: [Genre]
}

export interface MovieService {
  movies: Ref<MovieResponse | undefined>
  getMovies: (genre: string) => Promise<void>
  genres: Ref<GenreResponse | undefined>
  getGenres: () => Promise<void>
}
