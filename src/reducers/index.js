// import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import configure from './config';
// import auth from './auth';

// const appReducer = combineReducers({
//   configure,
//   auth,
//   form: formReducer,
// });

//export default appReducer;
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { loadingBarReducer } from 'react-redux-loading-bar';
import signupReducer from './signup';
import loginReducer from './login';

const rootReducers = combineReducers({
  form: formReducer,
  loadingBar: loadingBarReducer,
  signupReducer,
  loginReducer,
});

export default rootReducers;