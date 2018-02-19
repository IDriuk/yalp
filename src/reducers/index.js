import { combineReducers } from 'redux';
import BusinessesReducer from './reducer_businesses';

const rootReducer = combineReducers({
  businesses: BusinessesReducer
});

export default rootReducer;
