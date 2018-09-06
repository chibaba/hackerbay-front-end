export const SIGNUP = 'containers/signup/SIGNUP';
export const SIGNUP_SUCCESS = 'containers/signup/SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'containers/signup/SIGNUP_ERROR';

export const signup = (data) => {
  return {
    type: SIGNUP,
    payload: data
  }
};

export const signupSuccess = (res) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: res
  }
};

export const signupError = (error) => {
  return {
    type: SIGNUP_ERROR,
    payload: error
  }
};
