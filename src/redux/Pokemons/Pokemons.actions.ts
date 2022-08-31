import { Action } from "..";

const INSERT_NEW_POKEMON = 'INSERT_NEW_POKEMON';

export const insertNewPokemon = (payload: string): Action<string> => {
  return {
    type: INSERT_NEW_POKEMON,
    payload
  }
}