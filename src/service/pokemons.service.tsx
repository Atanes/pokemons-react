import http from "../utils/http";

export const getPokemon = (pokemon: string | undefined) =>
    http.get(`/${pokemon}`)
        .then(resposta => resposta.data);