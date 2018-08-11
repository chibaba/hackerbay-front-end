import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import logger from 'redux-logger';
//import reducers from './reducers';
import concas from './store/createStore';
//import ReduxPromise from 'redux-promise';

const store = concas;

ReactDOM.render(
<Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
