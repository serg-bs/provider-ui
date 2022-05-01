import React from 'react';

import Menu from '../menu';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import LoginPage from "../pages/login-page";

const App = () => {
  return (
    <div>
      <LoginPage/>
      {/*<Menu />*/}
      {/*<RandomPlanet />*/}

      {/*<div className="row mb2">*/}
      {/*  <div className="col-md-6">*/}
      {/*    <ItemList />*/}
      {/*  </div>*/}
      {/*  <div className="col-md-6">*/}
      {/*    <PersonDetails />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default App;