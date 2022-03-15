import React from 'react';

export default class Calculator extends React.Component {
  result = () => (
    <div className="result">
      <h3>0</h3>
    </div>
  )

  right = () => (
    <div id="right">
      <button type="button">.</button>
      <button type="button">0</button>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">%</button>
      <button type="button">+/-</button>
      <button type="button">A/C</button>
    </div>
  );

  left = () => (
    <div id="left">
      <button type="button">/</button>
      <button type="button">x</button>
      <button type="button">-</button>
      <button type="button">+</button>
      <button type="button">=</button>
    </div>
  );

  render() {
    return (
      <>
        <div className="calculator">
          <this.result />
          <div className="elem">
            <this.right />
            <this.left />
          </div>
        </div>
      </>
    );
  }
}
