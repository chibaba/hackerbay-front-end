
import React from 'react';
import { Switch } from 'react-router-dom';

import styled from 'styled-components';
import { HeaderLoader, loadComponent } from '../../components/common/loader';
import Layout from '../../components/App/Layout';
import { Authenticated, UnAuthenticated } from '../../components/common/auth';

const Login = loadComponent(() => import('../../containers/Login'));
const Signup = loadComponent(() => import('../../containers/Signup'));

// import Login from '../../containers/Login';
// import Signup from '../../containers/Signup';


const Home = styled.div`
  font-size: 20px;
`;

const App  = () => (
    <React.Fragment>
      <HeaderLoader />
      <Layout>
        <Switch>
          <Authenticated exact path='/' render={() => <Home>Home</Home>} />
          <UnAuthenticated path='/login' component={Login}/>
          <UnAuthenticated path='/signup' component={Signup}/>
        </Switch>
      </Layout>
    </React.Fragment>
  );

export default App;
