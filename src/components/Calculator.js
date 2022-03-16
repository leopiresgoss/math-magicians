import React, { useState } from 'react';
import Result from './Result';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [screen, setScreen] = useState('screen');
  const [calc, setCalc] = useState('calc');

  const updateCalculatorScreen = (btnContent) => {
    const newCalc = calculate(calc, btnContent);

    // update calculator
    setCalc(newCalc);

    let { total, operation, next } = newCalc;

    if (total === null) total = '';
    if (operation === null || operation === undefined) operation = '';
    if (next === null) next = '';

    const updatedScreen = `${total}${operation}${next}`;
    setScreen(updatedScreen);
  };

  const handleButtonClick = (btnContent) => {
    updateCalculatorScreen(btnContent);
  };

  return (
    <>
      <div className="calculator">
        <Result result={screen} />
        <div className="elem">
          <Buttons handleButtonClick={handleButtonClick} />
        </div>
      </div>
    </>
  );
};

export default Calculator;
