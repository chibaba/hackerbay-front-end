export const LOGIN = 'containers/login/LOGIN';
export const LOGIN_SUCCESS = 'containers/login/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'containers/login/LOGIN_ERROR';

export const login = (data) => {
  return {
    type: LOGIN,
    payload: data
  }
};

export const loginSuccess = (res) => {
  return {
    type: LOGIN_SUCCESS,
    payload: res
  }
};

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error
  }
};
