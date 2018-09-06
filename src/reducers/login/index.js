import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../../actions';

const initialState = {
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  console.log(action);
  switch(action.type) {
    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false };
    case LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}