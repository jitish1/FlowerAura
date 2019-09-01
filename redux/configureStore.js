import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { FaReducer } from '../reducer/reducer';
// import { AsyncStorage } from "react-native";

import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const config = {
    key: 'root3',
    storage,
    debug: true
}



export const ConfigureStore = () => {
    const store = createStore(
        persistCombineReducers(config, {
            FaReducer,
        }),
        applyMiddleware(thunk, logger)
    );

    const persistor = persistStore(store)

    return { persistor, store };
}

// export const ConfigureStore = () => {
//     const store = createStore(
//         combineReducers({
//             apodreducer: apodreducer,
//         }),
//         applyMiddleware(thunk, logger)
//     );

//     return store;
// }