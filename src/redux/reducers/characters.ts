import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getCharacters } from "../../graphql";

export interface Origin {
    name?: String
}
  
export interface Location {
    name?: String
}

export interface Character {
    name: String
    origin?: Origin
    location?: Location
    status?: String
    species?: String
    type?: String
    gender?: String
}

interface CharacterState {
    characters: Array<Character>
}

const initialState: CharacterState = {
    characters: []
}

export const charactersList = createAsyncThunk('', async () => {
    const response = await getCharacters({page: 1})
    .then(({characters}: any) => {
        return characters;
    });

    
    return response.data
})


const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        get: (state) => {
            state.characters = charactersList;
        },
        load: (state, { payload }) => {
            state.characters = payload;
        },
    },
});

export default charactersSlice;