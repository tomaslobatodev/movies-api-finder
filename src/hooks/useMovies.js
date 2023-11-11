import { useState } from 'react'
import { fetchMovies } from '../service/fetchMovies.js'

export function useMovies({ search }) {
  const [movies, setMovies] = useState([])
  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(false)

  const getMovies = async () => {
    try {
      setLoading(true)
      setNotFound(false)
      const fetchedMovies = await fetchMovies({ search })
      if (!fetchedMovies || fetchedMovies.length === 0) {
        setNotFound(true)
      } else {
        setMovies(fetchedMovies)
      }
    } catch (error) {
      console.error('Error fetching movies:', error)
    } finally {
      setLoading(false)
    }
  }

  return { movies, getMovies, loading, notFound }
}