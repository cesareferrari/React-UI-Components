import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';



const App = () => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();

  const numberButtons = numbers.map(number => {
    return <NumberButton key={number} buttonStyle="number-button" text={number} />
  })

  return (
    <div>
      <ActionButton buttonStyle="number-button action-button normal"  text="clear" />
      {numberButtons}
      <ActionButton buttonStyle="number-button action-button"  text="0" />
    </div>
  );
};

export default App;
