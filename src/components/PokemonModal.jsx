
const PokemonModal = ({pokemon, onClose}) => {

    if(!pokemon) return null

    return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">

        <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-6 relative animate-fade-in-up">
            
            <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-poke-red font-bold text-xl transition-colors"
            >
            ✕
            </button>

            <div className="flex flex-col items-center border-b-2 border-gray-100 pb-4">
                <img 
                    src={pokemon.sprites?.other['official-artwork']?.front_default || pokemon.sprites?.front_default} 
                    alt={pokemon.name} 
                    className="w-40 h-40 object-contain drop-shadow-lg"
                />
                <h2 className="capitalize font-bold text-3xl text-poke-blue mt-2">
                    {pokemon.name} <span className="text-gray-400 text-xl">#{pokemon.id}</span>
                </h2>

                <div className="flex gap-2 mt-2">
                    {pokemon.types.map((typeInfo) => (
                        <span key={typeInfo.type.name} className="px-3 py-1 bg-poke-yellow text-poke-blue rounded-full text-sm font-bold capitalize shadow-sm">
                            {typeInfo.type.name}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 rounded-lg p-2">
                    <p className="text-gray-500 text-sm font-semibold">Altura</p>
                    <p className="font-bold text-poke-dark-red">{pokemon.height / 10} m</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                    <p className="text-gray-500 text-sm font-semibold">Peso</p>
                    <p className="font-bold text-poke-dark-red">{pokemon.weight / 10} kg</p>
                </div>
            </div>

        </div>
    </div>
    )
}

export default PokemonModal