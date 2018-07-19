import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import configure from './configure';
import auth from './reducers/auth';

const appReducer = combineReducers({
  configure,
  auth,
  form: formReducer,
});

export default appReducer;
