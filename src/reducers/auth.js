import { Record } from 'immutable';
import varies from '../medium/auth';
import createReducers from '../store/createReducers';

const Form = Record({
  isLogin: false,
  token: null,
});

const initialState = new Form();

export default createReducers(initialState, {
  [varies.ON_LOGIN_SUCCESS]: (state, { token }) => {
    return state.set('isLogin', true).set('token', token);
  },
  [varies.ON_SIGN_UP_SUCCESS]: (state, { token }) => {
    return state.set('isLogin', true).set('token', token);
  },
});
