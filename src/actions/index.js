import axios from 'axios';
import varies from '../medium/auth';

const BASE_API_URL = 'http://localhost:3000';

axios.defaults.baseURL = BASE_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const onSignUp = params => dispatch => {
  dispatch({ type: varies.ON_SIGN_UP_REQUEST });

  return axios
    .post('/signup', params, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      dispatch({ type: varies.ON_SIGN_UP_SUCCESS, token: response.data.token });
      console.log(response.data);
      return Promise.resolve(response.data);
    })
    .catch(error => {
      dispatch({ type: varies.ON_SIGN_UP_FAILURE });
      console.log(error.response);
      return Promise.reject(error.response.data.error);
    });
};
export const onLogin = params => dispatch => {
  dispatch({ type: varies.ON_LOGIN_REQUEST });

  return axios
    .post('/login', params, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      dispatch({ type: varies.ON_LOGIN_SUCCESS, token: response.data.token });
      return Promise.resolve(response.data);
    })
    .catch(error => {
      dispatch({ type: varies.ON_LOGIN_FAILURE });
      return Promise.reject(error.response.data.error);
    });
};

