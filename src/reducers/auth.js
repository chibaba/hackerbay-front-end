import { Record } from 'immutable';
import types from '../medium/auth';
import createReducers from '../store/createReducers';

const Form = Record({
  isLogin: false,
  token: null,
});

const initialState = new Form();

export default createReducers(initialState, {
  [types.ON_LOGIN_SUCCESS]: (state, { token }) => {
    return state.set('isLogin', true).set('token', token);
  },
  [types.ON_SIGN_UP_SUCCESS]: (state, { token }) => {
    return state.set('isLogin', true).set('token', token);
  },
});
