import { useState } from 'react'
import { fetchMovies } from '../service/movies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    try {
      const fetchedMovies = await fetchMovies({search})
      setMovies(fetchedMovies)
    } catch (error) {
      console.error(error)
    }
  }
    

  return { movies, getMovies }
}