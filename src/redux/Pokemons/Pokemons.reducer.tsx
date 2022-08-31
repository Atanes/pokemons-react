/* eslint-disable import/no-anonymous-default-export */
const INSERT_NEW_POKEMON = 'INSERT_NEW_POKEMON';

export interface Action<T = any> {
    type: string,
    payload?: T
}
export default function (state = [], action: Action) {
    switch (action.type) {
        case INSERT_NEW_POKEMON:
            return [...state, action.payload]
        default:
            return state
    }
}