import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import moviesReducer from '../reducers/movies_reducer';

const rootReducer = combineReducers({
    moviesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;