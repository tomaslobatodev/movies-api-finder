import './App.css'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { Movies } from './renderMovies'

function App() {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading, notFound } = useMovies({ search })

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (!error) {
      getMovies({ search })
    }
  }

  return (
    <div>
      <header>
        <h1>Movies API Finder</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{ borderColor: error ? 'red' : 'transparent' }}
            onChange={(ev) => setSearch(ev.target.value)}
            type="text"
            placeholder="The Matrix"
          />
          <button type="submit">Search</button>
        </form>
        {error && <p className="error-msg">{error}</p>}
      </header>
      <main>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <Movies movies={movies} notFound={notFound} />
        )}
      </main>
    </div>
  )
}

export default App
