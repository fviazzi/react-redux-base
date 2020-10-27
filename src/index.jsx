// External modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Internal modules
import { store } from './_redux/store.js';
import { App } from './App.jsx';
import { serverMock } from './_helpers/server-mock.js';
import { mockExample } from './_helpers/server-mock-example.js';

// setup fake backend
serverMock();
//mockExample();

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
);
