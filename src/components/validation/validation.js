import React from 'react';

import './validation.css';

const Validation = (props) => {
  return (
    <div className="error-indicator">
        {props.message}
    </div>
  );
};

export default Validation;
