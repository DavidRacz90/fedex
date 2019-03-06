import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import simpleReducer from './simpleReducer';

const rootReducer = combineReducers({
  simpleReducer,
  routing: routerReducer,
});

export default rootReducer;
