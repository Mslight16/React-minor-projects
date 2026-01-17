import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import '../App.css'
export default function Home() {
  return (
    <main>
     <p className='content'>Welcome to Cocktail Gallery, a curated space where cocktails are more than drinks — they are art, culture, and experience.
        At Cocktail Gallery, we celebrate the craft of mixology by showcasing stunning cocktails from around the world. From timeless classics to bold modern creations, our gallery is designed to inspire cocktail lovers, bartenders, and curious explorers alike.
     </p>
      <SearchForm />
      <CocktailList />
    </main>
  )
}
