// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// //import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// //import logger from 'redux-logger';
// //import reducers from './reducers';
// import concas from './store/createStore';
// //import ReduxPromise from 'redux-promise';

// const store = concas;

// ReactDOM.render(
// <Provider store={store}>
//         <App />
//     </Provider>
//     , document.getElementById('root'));
// registerServiceWorker();


import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import { BrowserRouter } from 'react-router-dom';

import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import saga from './saga';
import '../src/assets/css/antd.css';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './globalStyles';
import theme from './theme';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(saga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));

registerServiceWorker();

export default store;
