import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemons, setLoading, setError } from '../store/pokemonSlice';

export const usePokemons = () => {

    const dispatch = useDispatch();
    const { currentPage, searchTerm } = useSelector((state) => state.pokemon);

    useEffect(() => {

        const fetchPokemons = async () => {
            dispatch(setLoading(true)); 
            dispatch(setError(null)); 

            try {
                if (searchTerm) {
                    
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
                    if (!response.ok){
                        throw new Error('Pokémon no encontrado');
                    } 
                    const data = await response.json();
                    dispatch(setPokemons([data])); 

                } else {
                    
                    const limit = 6;
                    const offset = (currentPage - 1) * limit;
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
                    const data = await response.json();

                    const detailedPokemons = await Promise.all(
                        data.results.map(async (pokemon) => {
                        const res = await fetch(pokemon.url);
                        return res.json();
                        })
                    );

                    dispatch(setPokemons(detailedPokemons));
                }
            } catch (error) {
                dispatch(setPokemons([]));
                dispatch(setError(error.message));
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchPokemons();
        
    }, [currentPage, searchTerm, dispatch]);
};