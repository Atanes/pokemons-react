import React, { useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { insertNewPokemon } from '../../redux/Pokemons/Pokemons.actions';
import { listaPokemons } from '../../utils/dadosPokemons';

function App() {
  
  const [pokemons, setPokemons] = useState(listaPokemons(''));
  const dispatch = useDispatch();

  function handleInsertNew() {
    dispatch(insertNewPokemon('bulbasaur'));
    setPokemons(listaPokemons(''));
  }
  
  function handleChange(event: { target: { value: string; }; }) {
    setPokemons(listaPokemons(event.target.value));
  }

  return (
    <div className="App" >
      <h1>Listagem de Pokemons - React </h1>
      Filtrar pelo nome: <input type="text" onChange={handleChange} />
      <section className='listagem'>
        {pokemons}
      </section>
      <button onClick={handleInsertNew}>Novo Pokemon</button>
    </div>
  );
}

export default App;


