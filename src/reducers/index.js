import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import YalpReducer from './reducer_yalp';

const rootReducer = combineReducers({
  form: formReducer,
  yalp: YalpReducer
});

export default rootReducer;
