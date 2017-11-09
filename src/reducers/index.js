// Retorne todos os reducers combinados aqui
import { combineReducers } from 'redux';
import PostReducer from './PostReducer';

export default combineReducers({
    posts: PostReducer
});
