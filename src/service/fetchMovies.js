const API_KEY = 'd9c0f064'

export const fetchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      img: movie.Poster,
    }))
  } catch (error) {
    throw new Error('Movie not found')
  }
}
