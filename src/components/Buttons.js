import React from 'react';
import PropTypes from 'prop-types';

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    const { handleButtonClick } = this.props;
    handleButtonClick(e.target.innerHTML);
  }

  render() {
    return (
      <>
        <div id="left">
          <button type="button" onClick={this.handleButtonClick}>AC</button>
          <button type="button" onClick={this.handleButtonClick}>+/-</button>
          <button type="button" onClick={this.handleButtonClick}>%</button>
          <button type="button" onClick={this.handleButtonClick}>7</button>
          <button type="button" onClick={this.handleButtonClick}>8</button>
          <button type="button" onClick={this.handleButtonClick}>9</button>
          <button type="button" onClick={this.handleButtonClick}>4</button>
          <button type="button" onClick={this.handleButtonClick}>5</button>
          <button type="button" onClick={this.handleButtonClick}>6</button>
          <button type="button" onClick={this.handleButtonClick}>1</button>
          <button type="button" onClick={this.handleButtonClick}>2</button>
          <button type="button" onClick={this.handleButtonClick}>3</button>
          <button id="zero" type="button" onClick={this.handleButtonClick}>0</button>
          <button type="button" onClick={this.handleButtonClick}>.</button>
        </div>
        <div id="right">
          <button type="button" onClick={this.handleButtonClick}>÷</button>
          <button type="button" onClick={this.handleButtonClick}>x</button>
          <button type="button" onClick={this.handleButtonClick}>-</button>
          <button type="button" onClick={this.handleButtonClick}>+</button>
          <button type="button" onClick={this.handleButtonClick}>=</button>
        </div>
      </>
    );
  }
}

Buttons.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};
