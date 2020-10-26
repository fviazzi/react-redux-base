// External modules
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// Internal modules
import rootReducer from './reducers.js';

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);