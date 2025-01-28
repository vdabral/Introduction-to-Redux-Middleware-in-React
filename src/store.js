// src/store.js
import { createStore, applyMiddleware } from 'redux';

// Initial state for the reducer
const initialState = {
  count: 0,
};

// Simple reducer to handle actions
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Middleware to log action types
const actionTypeLogger = (store) => (next) => (action) => {
  console.log('Dispatching Action Type:', action.type);
  return next(action); // Proceed to the next middleware or reducer
};

// Middleware to log action payloads
const payloadLogger = (store) => (next) => (action) => {
  console.log('Action Payload:', action.payload);
  return next(action); // Proceed to the next middleware or reducer
};

// Create Redux store with middleware
const store = createStore(reducer, applyMiddleware(actionTypeLogger, payloadLogger));

export default store;
