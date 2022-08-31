import { createStore, combineReducers } from 'redux';
import Pokemons from './Pokemons/Pokemons.reducer';

export interface Action<T = any> {
    type: string,
    payload?: T
}
const reducers = combineReducers({
    pokemons: Pokemons
})

const store = createStore(
    reducers,
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;