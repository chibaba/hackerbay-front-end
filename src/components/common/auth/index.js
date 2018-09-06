
import React from 'react';
import { Route, Redirect } from 'react-router-dom';


import { getSession } from '../../../utils/session';

export const Authenticated = (props) => {
  const session = getSession();
  return (
    <React.Fragment>
      {
        session ?
        <Route {...props}/> :
        <Redirect to="/login" />
      }
    </React.Fragment>
  )
};

export const UnAuthenticated = (props) => {
  const session = getSession();
  return (
    <React.Fragment>
      {
        !session ?
          <Route {...props}/> :
          <Redirect to="/" />
      }
    </React.Fragment>
  )
};