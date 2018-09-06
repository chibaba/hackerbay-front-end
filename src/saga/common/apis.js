import { message } from 'antd';

export const apiOnSuccess = msg => function* onSuccess() {
  yield message.success(msg);
};

export const apiOnError = function* onError(action) {
  yield message.error(action.error);
};