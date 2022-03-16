import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ result }) => {
  let updatedResult = result;

  if (result === 'screen') updatedResult = '';

  return (
    <div className="result">
      <h3>{updatedResult}</h3>
    </div>
  );
};

Result.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Result;
