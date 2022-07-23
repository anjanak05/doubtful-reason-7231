import { Icon, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../Project_Style/Navbar.module.css';
import { FaHome } from 'react-icons/fa';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const links = [
  { to: '/', title: 'Nation' },
  { to: '/SouthMainPage', title: 'South' },
  { to: '/', title: 'World' },
  { to: '/SouthMainPage', title: 'Entertainment' },
  { to: '/', title: 'Jobs & Education' },
  { to: '/SouthMainPage', title: 'Sports' },
  { to: '/SouthMainPage', title: 'Technology' },
  { to: '/', title: 'Life' },
  { to: '/SouthMainPage', title: 'Gallery' },
];
const more = [
  'Busines',
  'Opinion',
  'Sunday Chr0nicle',
  'Science',
  "Editors' Pick",
  'Just In',
  'Astroguide',
];

const baseStyle = {
  color: 'black',
  padding: '0.5% 1%',
};

const activeStyle = {
  padding: '0.5% 1%',
  borderBottom: '3px solid red',
  background: '#eeeeee',
};
const LinksSection = () => {
  return (
    <>
      <div className={styles.navbarLinks}>
        <Icon as={FaHome} fontSize={20} marginTop={3} />
        {links.map(e => (
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            to={e.to}
          >
            <div>{e.title}</div>
          </NavLink>
        ))}
        <div style={baseStyle}>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              More
            </MenuButton>
            <MenuList>
              {more.map(e => (
                <MenuItem>{e}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default LinksSection;
