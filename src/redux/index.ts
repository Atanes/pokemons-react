import { createStore, combineReducers } from 'redux';
import Pokemons from './Pokemons/Pokemons.reducer';

const reducers = combineReducers({
    pokemons: Pokemons
})

const store = createStore(
    reducers,
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;