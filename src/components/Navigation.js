import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div className="navigation">
    <h1>Math Magicians</h1>
    <div className="links">
      <NavLink exact to="/" activeClassName="nav-active">Home</NavLink>
      <NavLink exact to="/Calculation" activeClassName="nav-active">Calculator</NavLink>
      <NavLink exact to="/Quote" activeClassName="nav-active">Quote</NavLink>
    </div>
  </div>
);

export default Navigation;
