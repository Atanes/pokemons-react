import React, { useState } from 'react';
import './App.css';
import CardPokemon from '../CardPokemon';
import { useDispatch } from 'react-redux';
import { insertNewPokemon } from '../../redux/Pokemons/Pokemons.actions';

function App() {
  const arrayPokemons = ['pikachu', 'ditto', 'charmander', 'squirtle', 'caterpie', 'weedle', 'rattata']
  const [pokemons, setPokemons] = useState(listaPokemons());
  const dispatch = useDispatch();
  function novoPokemon() {
    const novoPokemon = dispatch(insertNewPokemon()).payload;
    arrayPokemons.push(novoPokemon?.nome || 'Atanes');
    setPokemons(listaPokemons());
  }

  function listaPokemons() {
    return arrayPokemons.map((pokemon) =>
      <CardPokemon key={pokemon} nomePokemon={pokemon} />)
  }

  return (
    <div className="App" >
      <h1>Listagem de Pokemons - React </h1>
      <section className='listagem'>
        {pokemons}
      </section>
      <button onClick={novoPokemon}>Novo Pokemon</button>
    </div>
  );
}

export default App;


