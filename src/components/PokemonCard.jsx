const PokemonCard = ({pokemon}) => {
    return (
        <div className="border-2 border-poke-blue rounded-lg p-4 flex flex-col items-center bg-white shadow-md hover:shadow-xl transition-shadow">
            <img className="w-32 h-32 object-contain" src={pokemon.sprites?.front_default} alt={pokemon.name} />
            <h3 className="capitalize font-bold text-xl text-poke-dark-red mt-2">
                {pokemon.name}
            </h3>
            <p className="text-gray-500 font-semibold">
                #{pokemon.id}
            </p>
            
        </div>
    )
}

export default PokemonCard