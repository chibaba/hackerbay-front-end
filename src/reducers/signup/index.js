import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from '../../actions/';

const initialState = {
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SIGNUP:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
      return { ...state, loading: false};
    case SIGNUP_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}