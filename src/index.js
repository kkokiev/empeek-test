import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import './index.css';
import reducer from './services/store';
import { loadState, saveState } from './helpers/localStorage';

import App from './App';

const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState
);

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 500));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
