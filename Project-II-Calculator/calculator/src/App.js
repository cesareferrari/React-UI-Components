import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();

  const numberButtons = numbers.map(number => {
    return <NumberButton key={number} buttonStyle="number-button" text={number} />
  })

  const division = '\u00F7'
  const multiplication = '\u00D7'
  const addition = '\u002B'
  const subtraction = '\u2212'
  const equals = '\u003D'

  const symbols = [division, multiplication, addition, subtraction, equals];

  const symbolButtons = symbols.map(symbol => {
    return <NumberButton key={symbol} buttonStyle="number-button symbol" text={symbol} />
  })

  return (
    <div>
      <div className="buttons-container">
        <div className="number-buttons-container">
          <ActionButton buttonStyle="number-button action-button normal"  text="clear" />
          {numberButtons}
          <ActionButton buttonStyle="number-button action-button"  text="0" />
        </div>
        <div className="symbols-container">
          {symbolButtons}
        </div>
      </div>
    </div>
  );
};

export default App;
