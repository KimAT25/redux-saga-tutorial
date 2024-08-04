import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
// import reportWebVitals from './reportWebVitals';
import './index.css';

import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';

import mySaga from './saga/sagas';
import myReducer from './reducers/reducer';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ reducer: myReducer, middleware: () => [sagaMiddleware] });

sagaMiddleware.run(mySaga);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

