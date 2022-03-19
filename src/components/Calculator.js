/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import calculate from './calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };
    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler(button) {
    // const object = calculate(this.state, button);
    this.setState((state) => (calculate(state, button)));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="calculator-container">
        <div className="screen">{next || total}</div>
        <button type="button" onClick={(e) => this.eventHandler(e.target.textContent)}>AC</button>
        <button type="button" onClick={(e) => this.eventHandler(e.target.textContent)}>+/-</button>
        <button type="button" onClick={(e) => this.eventHandler(e.target.textContent)}>%</button>
        <button type="button" onClick={(e) => this.eventHandler(e.target.textContent)} className="orange">/</button>
        <button type="button" onClick={(e) => this.eventHandler(e.target.textContent)}>7</button>
        <button type="button" onClick={(e) => this.eventHandler(e.target.textContent)}>8</button>
        <button type="button" onClick={(e) => this.eventHandler(e.target.textContent)}>9</button>
        <button type="button" onClick={(e) => this.eventHandler(e.target.textContent)} className="orange">x</button>
        <button type="button" onClick={(e) => this.eventHandler(e.target.textContent)}>4</button>
        <button type="button" onClick={(e) => this.eventHandler(e.target.textContent)}>5</button>
        <button type="button" onClick={(e) => this.eventHandler(e.target.textContent)}>6</button>
        <button type="button" onClick={(e) => this.eventHandler(e.target.textContent)} className="orange">-</button>
        <button type="button" onClick={(e) => this.eventHandler(e.target.textContent)}>1</button>
        <button type="button" onClick={(e) => this.eventHandler(e.target.textContent)}>2</button>
        <button type="button" onClick={(e) => this.eventHandler(e.target.textContent)}>3</button>
        <button type="button" onClick={(e) => this.eventHandler(e.target.textContent)} className="orange">+</button>
        <button type="button" onClick={(e) => this.eventHandler(e.target.textContent)} className="zero">0</button>
        <button type="button" onClick={(e) => this.eventHandler(e.target.textContent)}>.</button>
        <button type="button" className="orange" onClick={(e) => this.eventHandler(e.target.textContent)}>=</button>
      </div>
    );
  }
}

export default Calculator;
