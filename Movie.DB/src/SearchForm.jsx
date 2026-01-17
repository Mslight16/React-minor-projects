import './App.css'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext()
  return (<>
  <h1>MovieDB</h1>
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      
      <h2>search movies</h2>
      <input
        type='text '
        className='form-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className='error'>{error.msg}</div>}
    </form>
    </>
  )
}

export default SearchForm
