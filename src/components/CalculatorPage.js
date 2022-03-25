/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import Calculator from './Calculator';

class CalculatorPage extends Component {
  render() {
    return (
      <div className="calculator-main">
        <h2>Lets do some maths!!</h2>
        <Calculator />
      </div>
    );
  }
}

export default CalculatorPage;
