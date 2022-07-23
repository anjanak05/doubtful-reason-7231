import React from 'react';
import LinksSection from '../Navbar/LinksSection';
import styles from '../../Project_Style/Navbar.module.css';
import TitleSection from '../Navbar/TitleSection';
import NavbarTop from '../Navbar/NavbarTop';

const Navbar = () => {
  return (
    <>
    <NavbarTop></NavbarTop>
    <div className={styles.navbarContainer}>
      <TitleSection></TitleSection>
     <LinksSection></LinksSection>
    </div>
    </>
  );
};

export default Navbar;
