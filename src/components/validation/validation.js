import React from 'react';

import './validation.css';

const Validation = (props) => {
  return (
    <div className="error-indicator">
      <span className="boom">
        {props.message}
      </span>
    </div>
  );
};

export default Validation;
