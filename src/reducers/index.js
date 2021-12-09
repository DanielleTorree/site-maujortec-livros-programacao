import { combineReducers } from 'redux';
import detalhesLivro from '../api/todosOsLivros.json';

const reducers = combineReducers({
    field: () => ({ livro: detalhesLivro })
})

export default reducers;