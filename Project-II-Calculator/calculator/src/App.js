import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div>
      <NumberButton buttonStyle="number-button" text="0" />
      <NumberButton buttonStyle="number-button"  text="1" />
    </div>
  );
};

export default App;
