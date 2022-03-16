import React from 'react';
import Result from './Result';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: '',
      calc: {},
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.updateCalculatorScreen = this.updateCalculatorScreen.bind(this);
  }

  handleButtonClick(btnContent) {
    this.updateCalculatorScreen(btnContent);
  }

  updateCalculatorScreen = (btnContent) => {
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

  render() {
    const { screen } = this.state;
    return (
      <>
        <div className="calculator">
          <Result result={screen} />
          <div className="elem">
            <Buttons handleButtonClick={this.handleButtonClick} />
          </div>
        </div>
      </>
    );
  }
}
