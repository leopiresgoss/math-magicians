import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ handleButtonClick }) => {
  const updateHandleButtonClick = (e) => {
    handleButtonClick(e.target.innerHTML);
  };

  return (
    <>
      <div id="left">
        <button type="button" onClick={updateHandleButtonClick}>AC</button>
        <button type="button" onClick={updateHandleButtonClick}>+/-</button>
        <button type="button" onClick={updateHandleButtonClick}>%</button>
        <button type="button" onClick={updateHandleButtonClick}>7</button>
        <button type="button" onClick={updateHandleButtonClick}>8</button>
        <button type="button" onClick={updateHandleButtonClick}>9</button>
        <button type="button" onClick={updateHandleButtonClick}>4</button>
        <button type="button" onClick={updateHandleButtonClick}>5</button>
        <button type="button" onClick={updateHandleButtonClick}>6</button>
        <button type="button" onClick={updateHandleButtonClick}>1</button>
        <button type="button" onClick={updateHandleButtonClick}>2</button>
        <button type="button" onClick={updateHandleButtonClick}>3</button>
        <button id="zero" type="button" onClick={updateHandleButtonClick}>0</button>
        <button type="button" onClick={updateHandleButtonClick}>.</button>
      </div>
      <div id="right">
        <button type="button" onClick={updateHandleButtonClick}>÷</button>
        <button type="button" onClick={updateHandleButtonClick}>x</button>
        <button type="button" onClick={updateHandleButtonClick}>-</button>
        <button type="button" onClick={updateHandleButtonClick}>+</button>
        <button type="button" onClick={updateHandleButtonClick}>=</button>
      </div>
    </>
  );
};

Buttons.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default Buttons;
