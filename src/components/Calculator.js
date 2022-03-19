/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import calculate from './calculate';

const Calculator = () => {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
  });

  const eventHandler = (button) => {
    setCalculatorState(calculate(calculatorState, button));
  };

  return (
    <div className="calculator-container">
      <div className="screen">{calculatorState.next || calculatorState.total}</div>
      <button type="button" onClick={(e) => eventHandler(e.target.textContent)}>AC</button>
      <button type="button" onClick={(e) => eventHandler(e.target.textContent)}>+/-</button>
      <button type="button" onClick={(e) => eventHandler(e.target.textContent)}>%</button>
      <button type="button" onClick={(e) => eventHandler(e.target.textContent)} className="orange">/</button>
      <button type="button" onClick={(e) => eventHandler(e.target.textContent)}>7</button>
      <button type="button" onClick={(e) => eventHandler(e.target.textContent)}>8</button>
      <button type="button" onClick={(e) => eventHandler(e.target.textContent)}>9</button>
      <button type="button" onClick={(e) => eventHandler(e.target.textContent)} className="orange">x</button>
      <button type="button" onClick={(e) => eventHandler(e.target.textContent)}>4</button>
      <button type="button" onClick={(e) => eventHandler(e.target.textContent)}>5</button>
      <button type="button" onClick={(e) => eventHandler(e.target.textContent)}>6</button>
      <button type="button" onClick={(e) => eventHandler(e.target.textContent)} className="orange">-</button>
      <button type="button" onClick={(e) => eventHandler(e.target.textContent)}>1</button>
      <button type="button" onClick={(e) => eventHandler(e.target.textContent)}>2</button>
      <button type="button" onClick={(e) => eventHandler(e.target.textContent)}>3</button>
      <button type="button" onClick={(e) => eventHandler(e.target.textContent)} className="orange">+</button>
      <button type="button" onClick={(e) => eventHandler(e.target.textContent)} className="zero">0</button>
      <button type="button" onClick={(e) => eventHandler(e.target.textContent)}>.</button>
      <button type="button" className="orange" onClick={(e) => eventHandler(e.target.textContent)}>=</button>
    </div>
  );
};

export default Calculator;
