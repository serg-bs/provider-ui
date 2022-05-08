import React from 'react';

import './error-auth.css';
import icon from './death-star.png';
import {Link} from "react-router-dom";

const ErrorAuth = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">BOOM!</span>
        <p>You have no right to see this page, please log in. <Link to="/login">please log in</Link>.</p>

    </div>
  );
};

export default ErrorAuth;
