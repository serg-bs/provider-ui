import React from 'react';

import './menu.css';

const Menu = () => {
  return (
    <div className="menu d-flex">
      <h3>
        <a href="src/components/menu/manu#menu.js">
          StarDB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="src/components/menu/manu#menu.js">People</a>
        </li>
        <li>
          <a href="src/components/menu/manu#menu.js">Planets</a>
        </li>
        <li>
          <a href="src/components/menu/manu#menu.js">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;