import React from 'react';
import icon from "./red-x.jpg"

import './validation.css';

const Validation = (props) => {
  return (
    <div className="error-indicator">
      <div className="boom ">
       <span className="error-message-text"> {props.message} </span>
      </div>
        <div className="optical-background"></div>
    </div>
  );
};

export default Validation;
