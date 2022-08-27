import React from "react";
import { useState, useEffect } from "react";
import { getPokemon } from "../../service/pokemons.service";
import "./CardPokemon.css";

declare interface CardPokemonProps {
  nomePokemon?: string,
}

declare interface Pokemon {
  id: string | undefined,
  nome: string | undefined,
  imagen: string | undefined,
}

const CardPokemon: React.FC<CardPokemonProps> = (props) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  useEffect(() => {
    getPokemon(props.nomePokemon)
      .then((dados) => {
        setPokemon({ id: dados.id, nome: dados.name, imagen: dados.sprites.front_default })
      })
      .catch((err) => "Ocorreu um erro no processamento");
  }, [props.nomePokemon]);

  return (
    <section>
      <div className="card-pokemon">
        <span>Id: {pokemon?.id}</span>
        <span>Nome: {pokemon?.nome}</span>
      </div>
      <img src={pokemon?.imagen} alt={pokemon?.nome} />
    </section>
  )

}

export default CardPokemon;
