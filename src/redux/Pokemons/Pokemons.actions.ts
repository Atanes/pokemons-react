import { Action } from "./Pokemons.reducer";
import { Pokemon } from "../../components/CardPokemon/CardPokemon";

const INSERT_NEW_POKEMON = 'INSERT_NEW_POKEMON';

export const insertNewPokemon = (): Action<Pokemon> => {
    return {
        type: INSERT_NEW_POKEMON,
        payload: {
            id: '1',
            nome: 'bulbasaur',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            habilidades: ['overgrow','chlorophyll']
        }
    }
}