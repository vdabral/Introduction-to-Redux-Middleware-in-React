// src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();  // Hook to dispatch actions
  const count = useSelector((state) => state.count);  // Access state using the useSelector hook

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Middleware Example</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: { value: 1 } })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: { value: -1 } })}>
        Decrement
      </button>
    </div>
  );
};

export default App;
