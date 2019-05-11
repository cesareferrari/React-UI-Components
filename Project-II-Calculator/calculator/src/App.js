import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div>
      <NumberButton buttonStyle="number-button" text="1" />
      <NumberButton buttonStyle="number-button"  text="2" />
      <ActionButton buttonStyle="number-button action-button"  text="0" />
      <ActionButton buttonStyle="number-button action-button normal"  text="clear" />
    </div>
  );
};

export default App;
