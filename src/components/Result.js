import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class Result extends React.Component {
  render() {
    const { result } = this.props;
    return (
      <div className="result">
        <h3>{result}</h3>
      </div>
    );
  }
}

Result.propTypes = {
  result: PropTypes.string.isRequired,
};
