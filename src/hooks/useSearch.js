import { useEffect, useRef, useState } from "react"

export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Please enter a movie')
      return
    }

    if (search.length > 50) {
      setError('input is too long')
      return
    }

    if (search.length < 3) {
      setError('Input is too short')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}