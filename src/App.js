/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import CalculatorPage from './components/CalculatorPage';
import HomePage from './components/HomePage';
import QuotePage from './components/QuotePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Maths Muggles</h1>
          <nav className="header-nav">
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/calculator">Calculator</Link>
            <Link className="links" to="/quotes">Quotes</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/calculator" element={<CalculatorPage />} />
            <Route exact path="/quotes" element={<QuotePage />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
