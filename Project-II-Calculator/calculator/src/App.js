import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div>
      <NumberButton text="0" />
      <NumberButton text="1" />
    </div>
  );
};

export default App;
