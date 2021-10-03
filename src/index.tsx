import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import LoadableApp from "./LoadableApp";
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <LoadableApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals(console.log);
console.log("Current env:", process.env.NODE_ENV)
// console.log("Store:", store)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
