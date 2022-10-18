import { compose, createStore, applyMiddleware } from 'redux';
//import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action);
    }

    console.log('Type: ', action.type);
    console.log('Payload: ', action.payload);
    console.log('Current State: ', store.getState());

    next(action);
    console.log('Next State: ', store.getState());
}

const persistConfig

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);