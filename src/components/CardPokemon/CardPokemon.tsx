import React from "react";
import { useState, useEffect } from "react";
import { getPokemon } from "../../service/pokemons.service";
import "./CardPokemon.css";

declare interface CardPokemonProps {
  nomePokemon?: string,
}

export interface Pokemon {
  id: string | undefined,
  nome: string | undefined,
  imagen: string | undefined,
  habilidades: Array<string> | [],
}

const CardPokemon: React.FC<CardPokemonProps> = (props) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  useEffect(() => {
    getPokemon(props.nomePokemon)
      .then((dados) => {
        const nome = dados.name.charAt(0).toLocaleUpperCase() + dados.name.slice(1);
        const _habilidades = dados.abilities.map((habilidade: { ability: { name: string; }; })  => habilidade.ability.name);
        setPokemon({ id: dados.id, nome: nome, imagen: dados.sprites.front_default, habilidades: _habilidades })
      })
      .catch((err) => "Ocorreu um erro no processamento");
  }, [props.nomePokemon]);

  return (
    <section className="card-pokemon">
      <div className="card-pokemon-info">
        <span>Id: {pokemon?.id}</span>
        <span>Nome: {pokemon?.nome}</span>
        <span>Habilidades: {pokemon?.habilidades.join(', ')}</span>
      </div>
      <img src={pokemon?.imagen} alt={pokemon?.nome} />
    </section>
  )

}

export default CardPokemon;
