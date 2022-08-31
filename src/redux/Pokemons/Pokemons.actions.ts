import { Action } from "./Pokemons.reducer";

const INSERT_NEW_POKEMON = 'INSERT_NEW_POKEMON';

export const insertNewPokemon = (payload: string ): Action<string> => {
    return {
        type: INSERT_NEW_POKEMON,
        payload
    }
}