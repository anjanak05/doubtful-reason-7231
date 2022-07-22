import React from 'react';
import {  NavLink } from 'react-router-dom';

const links = [
  { to: '/NationMainPage', title: 'Nation' },
  { to: '/SouthMainPage', title: 'South' },
  { to: '/NationMainPage', title: 'World' },
  { to: '/SouthMainPage', title: 'Entertainment' },
  { to: '/SouthMainPage', title: 'Sports' },
];
const baseStyle = {
  color: 'black',
};

const activeStyle = {
  color: 'red',
};
const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        border: '1px solid red',
      }}
    >
      {links.map(e => (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          to={e.to}
        >
          {e.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
