import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Counter from './Counter';
import countReducer from './countReducer';

// initStore
const store = createStore(combineReducers({ count: countReducer }));

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root'),
);