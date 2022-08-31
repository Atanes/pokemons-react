import { Action } from "..";
import arrayPokemons from "../../utils/dadosPokemons";
/* eslint-disable import/no-anonymous-default-export */
const INSERT_NEW_POKEMON = 'INSERT_NEW_POKEMON';

export default function (state = arrayPokemons, action: Action) {
	switch (action.type) {
		case INSERT_NEW_POKEMON:
			if (!state.includes(action.payload)) state.push(action.payload)
			return state
		default:
			return state
	}
}