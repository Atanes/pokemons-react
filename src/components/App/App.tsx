import React from 'react';
import './App.css';
import CardPokemon from '../CardPokemon';

function App() {
  const pokemons = ['pikachu', 'ditto', 'charmander', 'squirtle', 'caterpie', 'weedle', 'rattata']
  return (
    <div className="App" >
      <h1>Listagem de Pokemons - React </h1>
      {pokemons.map((pokemon) =>
        <CardPokemon key={pokemon} nomePokemon={pokemon} />)}
    </div>
  );
}

export default App;
