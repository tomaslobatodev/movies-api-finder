import './App.css'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { Movies } from './renderMovies'

function App() {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })

  const handleSubmit = (ev) => {
    ev.preventDefault()
    getMovies({ search })
  }

  return (
    <div>
      <header>
        <h1>Movies API Finder</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{borderColor: error ? 'red' : 'transparent'}}
            onChange={(ev) => setSearch(ev.target.value)}
            type="text"
            placeholder="The Matrix"
          />
          <button type='submit'>Search</button>
        </form>
        {error && <p className='error-msg'>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
