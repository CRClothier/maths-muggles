/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import calculate from './calculate';

let object = {};
function eventHandler(obj, button) {
  object = calculate(object, button);
  console.log(object);
}

function displayResults() {
  if (object.total === null) {
    return 0;
  }
  return object.total;
}

class Calculator extends Component {
  render() {
    return (
      <div className="calculator-container">
        <div className="screen">0</div>
        <button type="button" onClick={eventHandler(object, 'AC')}>{displayResults()}</button>
        <button type="button" onClick={eventHandler(object, '+/-')}>+/-</button>
        <button type="button" onClick={eventHandler(object, '%')}>%</button>
        <button type="button" onClick={eventHandler(object, '/')} className="orange">/</button>
        <button type="button" onClick={eventHandler(object, '7')}>7</button>
        <button type="button" onClick={eventHandler(object, '8')}>8</button>
        <button type="button" onClick={eventHandler(object, '9')}>9</button>
        <button type="button" onClick={eventHandler(object, 'x')} className="orange">x</button>
        <button type="button" onClick={eventHandler(object, '4')}>4</button>
        <button type="button" onClick={eventHandler(object, '5')}>5</button>
        <button type="button" onClick={eventHandler(object, '6')}>6</button>
        <button type="button" onClick={eventHandler(object, '-')} className="orange">-</button>
        <button type="button" onClick={eventHandler(object, '1')}>1</button>
        <button type="button" onClick={eventHandler(object, '2')}>2</button>
        <button type="button" onClick={eventHandler(object, '3')}>3</button>
        <button type="button" onClick={eventHandler(object, '+')} className="orange">+</button>
        <button type="button" onClick={eventHandler(object, '0')} className="zero">0</button>
        <button type="button" onClick={eventHandler(object, '.')}>.</button>
        <button type="button" className="orange" onClick={eventHandler(object, '=')}>=</button>
      </div>
    );
  }
}

export default Calculator;
