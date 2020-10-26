// External modules
import { combineReducers } from 'redux';

// Internal modules
import { home } from '../views/Home/home.reducer.js';

const rootReducer = combineReducers({
  home
});

export default rootReducer;
