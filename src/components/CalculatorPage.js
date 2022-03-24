/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import Calculator from './Calculator';

class CalculatorPage extends Component {
  render() {
    return (
      <div>
        <div>calculator page!!</div>
        <Calculator />
      </div>
    );
  }
}

export default CalculatorPage;
