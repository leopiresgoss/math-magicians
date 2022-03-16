import React from 'react';
import Result from './Result';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: '',
      calc: {},
    };
    this.updateCalculatorScreen = this.updateCalculatorScreen.bind(this);
  }

  updateCalculatorScreen = (e) => {
    const btnContent = e.target.innerHTML;

    // update calculator
    this.setState((prevState) => {
      const newCalc = calculate(prevState.calc, btnContent);
      return ({
        calc: newCalc,
      });
    });

    // update screen
    this.setState((prevState) => {
      let { total, operation, next } = prevState.calc;

      if (total === null) total = '';
      if (operation === null || operation === undefined) operation = '';
      if (next === null) next = '';

      return ({
        screen: `${total}${operation}${next}`,
      });
    });
  }

  left = () => (
    <div id="left">
      <button type="button" onClick={this.updateCalculatorScreen}>AC</button>
      <button type="button" onClick={this.updateCalculatorScreen}>+/-</button>
      <button type="button" onClick={this.updateCalculatorScreen}>%</button>
      <button type="button" onClick={this.updateCalculatorScreen}>7</button>
      <button type="button" onClick={this.updateCalculatorScreen}>8</button>
      <button type="button" onClick={this.updateCalculatorScreen}>9</button>
      <button type="button" onClick={this.updateCalculatorScreen}>4</button>
      <button type="button" onClick={this.updateCalculatorScreen}>5</button>
      <button type="button" onClick={this.updateCalculatorScreen}>6</button>
      <button type="button" onClick={this.updateCalculatorScreen}>1</button>
      <button type="button" onClick={this.updateCalculatorScreen}>2</button>
      <button type="button" onClick={this.updateCalculatorScreen}>3</button>
      <button id="zero" type="button" onClick={this.updateCalculatorScreen}>0</button>
      <button type="button" onClick={this.updateCalculatorScreen}>.</button>
    </div>
  );

  right = () => (
    <div id="right">
      <button type="button" onClick={this.updateCalculatorScreen}>÷</button>
      <button type="button" onClick={this.updateCalculatorScreen}>x</button>
      <button type="button" onClick={this.updateCalculatorScreen}>-</button>
      <button type="button" onClick={this.updateCalculatorScreen}>+</button>
      <button type="button" onClick={this.updateCalculatorScreen}>=</button>
    </div>
  );

  render() {
    const { screen } = this.state;
    return (
      <>
        <div className="calculator">
          <Result result={screen} />
          <div className="elem">
            <this.left />
            <this.right />
          </div>
        </div>
      </>
    );
  }
}
