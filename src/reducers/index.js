import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import configure from './config';
import auth from './auth';

const appReducer = combineReducers({
  configure,
  auth,
  form: formReducer,
});

export default appReducer;
