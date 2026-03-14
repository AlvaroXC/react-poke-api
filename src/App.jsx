import { useSelector } from "react-redux"
import { usePokemons } from "./hooks/usePokemons"

function App() {

  usePokemons()

  const { pokemons, isLoading, error } = useSelector( state => state.pokemon)

  return (
    <>
      {isLoading && <p>Cargando Pokémon...</p>}
      {error && <p className="text-poke-red">{error}</p>}
      
      {!isLoading && !error && (
        <p>Se cargaron {pokemons.length} Pokémon exitosamente</p>
      )}
      
    </>
  )
}

export default App
