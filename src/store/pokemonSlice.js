import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemons: [],       
    currentPage: 1,     
    searchTerm: '',     
    isLoading: false,   
    error: null
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState, 
    reducers:{
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
            state.currentPage = 1; 
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const {setPokemons, setPage, setSearchTerm, setLoading, setError} = pokemonSlice.actions

export default pokemonSlice.reducer