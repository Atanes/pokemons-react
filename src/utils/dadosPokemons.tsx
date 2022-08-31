import React from "react";
import CardPokemon from "../components/CardPokemon";

const arrayPokemons = ['pikachu', 'ditto', 'charmander', 'squirtle', 'caterpie', 'weedle', 'rattata'];

export function incluiPokemon(pokemon: string) {
  arrayPokemons.push(pokemon);
}

export function listaPokemons(filtro: string) {
  return arrayPokemons
    .filter((pokemon) => pokemon.includes(filtro))
    .map((pokemon) =>
      <CardPokemon key={pokemon} nomePokemon={pokemon} />)
}

export default arrayPokemons;