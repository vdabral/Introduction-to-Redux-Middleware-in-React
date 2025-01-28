// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new root API
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

// Create a root container and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
