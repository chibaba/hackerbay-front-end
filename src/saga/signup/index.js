import { takeLatest } from 'redux-saga';
import { call } from 'redux-saga/effects';

import { Request } from '../../saga/index';
import { SIGNUP, SIGNUP_SUCCESS, signupSuccess, signupError } from '../../actions';
import { setSession } from '../../utils/session';
import { message } from 'antd';

function* signup(action) {
  yield call(Request.post('/signup', signupSuccess, signupError, action.payload));
}

function* onSuccess(action) {
  setSession(action.payload.session);
  yield message.success('Signed Up Successfully.');
}

export default function* signupSage() {
  yield takeLatest(SIGNUP, signup);
  yield takeLatest(SIGNUP_SUCCESS, onSuccess);
};