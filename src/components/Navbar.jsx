import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>navbar</NavLink>
      <NavLink to="/positions" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>positions</NavLink>
      <NavLink to="/flex" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>flex</NavLink>
      <NavLink to="/grid" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>grid</NavLink>
      <NavLink to="/subgrid" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>subgrid</NavLink>
      <NavLink to="/pseudo" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>pseudo</NavLink>
      <NavLink to="/animation" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>animation</NavLink>
  
    </nav>
  );
}

export default Navbar;
