import React from 'react';
//import  form from './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './binders/login';
import signup from './binders/signup';


const App = () => (
  <BrowserRouter>
    <div>
        <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={signup} />
        <Route component={signup} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App
