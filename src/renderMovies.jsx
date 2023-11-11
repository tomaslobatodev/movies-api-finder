function renderMovies(movies) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <img src={movie.img} alt={movie.title} />
          <p>{movie.title}</p>
          <p>{movie.year}</p>
        </li>
      ))}
    </ul>
  )
}

export function Movies({ movies, notFound }) {
  const hasMovies = movies && movies?.length > 0

  return (
    <>
      {hasMovies ? (
        renderMovies(movies)
      ) : (
        <>{notFound && <p className="error-msg">Movie not found</p>}</>
      )}
    </>
  )
}
