import { takeLatest } from 'redux-saga';
import { call } from 'redux-saga/effects';

import { Request } from '../../saga/index';
import { LOGIN, LOGIN_SUCCESS, loginSuccess, loginError } from '../../actions';
import { setSession } from '../../utils/session';
import { message } from 'antd';

function* login(action) {
  yield call(Request.post('/login', loginSuccess, loginError, action.payload));
}

function* onSuccess(action) {
  setSession(action.payload.session);
  yield message.success('Logged In Successfully.');
}

export default function* loginSage() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(LOGIN_SUCCESS, onSuccess);
};