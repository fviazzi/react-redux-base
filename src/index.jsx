// External modules
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Internal modules
import { store } from './_redux/store.js';
import { App } from './App/App.jsx';

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('app')
);