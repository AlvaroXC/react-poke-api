import { useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import { setPage, setSearchTerm } from "./store/pokemonSlice";
import { usePokemons } from "./hooks/usePokemons"
import PokemonCard from "./components/PokemonCard";

function App() {

  usePokemons()

  const dispatch = useDispatch();
  const { pokemons, isLoading, error, currentPage, searchTerm } = useSelector((state) => state.pokemon);

  const [searchTermInput, setSearchTermInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); 

    dispatch(setSearchTerm(searchTermInput));
    
  };

  const handleClear = () => {

    setSearchTermInput('');
    
    dispatch(setSearchTerm(''));
  };



  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans flex flex-col">
      
      <header className="mb-6">
        <div className="bg-poke-blue text-white inline-block px-4 py-2 rounded-md font-bold shadow-md">
          Alvaro Xool Canul
        </div>
      </header>

      <section className="mb-8 flex justify-center">
        <form onSubmit={handleSearch} className="flex w-full max-w-md gap-2">
          <input
            type="text"
            placeholder="Buscar Pokémon..."
            className="flex-1 border-2 border-poke-blue rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-poke-yellow"
            value={searchTermInput}
            onChange={(e) => setSearchTermInput(e.target.value)}
          />

          <button type="submit" className="bg-poke-red text-white px-4 py-2 rounded-md hover:bg-poke-dark-red transition-colors font-bold">
            Buscar
          </button>

          {searchTerm && (
            <button type="button" onClick={handleClear} className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition-colors font-bold">
              Limpiar
            </button>
          )}
        </form>
      </section>

      <main className="flex-1">
        {isLoading && <p className="text-center text-xl text-poke-blue font-bold animate-pulse">Cargando Pokémon...</p>}
        {error && <p className="text-center text-xl text-poke-red font-bold">{error}</p>}
        
        {!isLoading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pokemons.map((poke) => (
              <PokemonCard key={poke.id} pokemon={poke} />
            ))}
          </div>
        )}
      </main>

      {!searchTerm && !isLoading && !error && (
        <footer className="mt-8 flex justify-end">
          <div className="flex items-center gap-4 bg-white p-2 border-2 border-poke-gold rounded-md shadow-sm">
            <button 
              disabled={currentPage === 1}
              onClick={() => dispatch(setPage(currentPage - 1))}
              className="px-4 py-2 bg-poke-yellow text-poke-blue font-bold rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-95 transition-all"
            >
              Anterior
            </button>
            <span className="font-bold text-poke-blue">Página {currentPage}</span>
            <button 
              onClick={() => dispatch(setPage(currentPage + 1))}
              className="px-4 py-2 bg-poke-yellow text-poke-blue font-bold rounded-md hover:brightness-95 transition-all"
            >
              Siguiente
            </button>
          </div>
        </footer>
      )}
      
    </div>
  )
}

export default App
