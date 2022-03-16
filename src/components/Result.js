import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ result }) => (
  <div className="result">
    <h3>{result}</h3>
  </div>
);

Result.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Result;
