import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();
