import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import Store from './store/configureStore';

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister();
