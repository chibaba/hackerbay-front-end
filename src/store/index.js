import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import store from './createStore';
import auth from '../reducers/auth';

const appReducer = combineReducers({
  store,
  auth,
  form: formReducer,
});

export default appReducer;
