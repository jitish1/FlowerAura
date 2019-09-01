import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { FaReducer } from '../reducer/reducer';

const initialState ={};

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            FaReducer: FaReducer,
        }),
        initialState,
        applyMiddleware(thunk, logger)
    );

    return store;
}