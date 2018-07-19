import createConstants from '../store/createConstants';

const varies = createConstants(
  'ON_LOGIN_REQUEST',
  'ON_LOGIN_SUCCESS',
  'ON_LOGIN_FAILURE',
  'ON_SIGN_UP_REQUEST',
  'ON_SIGN_UP_SUCCESS',
  'ON_SIGN_UP_FAILURE'
);

export default varies;
