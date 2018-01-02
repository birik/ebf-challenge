/* eslint-disable import/default */
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore, { history } from './store/configureStore';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import App from './App';

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

