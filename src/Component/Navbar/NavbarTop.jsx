import React from 'react';
import styles from '../../Project_Style/Navbar.module.css';
import { Menu, MenuButton,Icon, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
 import {  FaAlignJustify, FaAngleDoubleRight, FaTwitterSquare,FaFacebookSquare, FaInstagram } from "react-icons/fa";
//  import {GrFacebook} from "react-icons/gr";
// //  import {AiFillTwitterCircle} from "react-icons/ai";


let iconslinks=[{id:'Crime'}, {id:'Current Affairs'},{id:'Politics'}, {id:'In Other News'}]

const NavbarTop = () => {
  return (
    <div className={styles.navbarTopContainer}>
      <div>
        <Menu>
          <MenuButton     as={IconButton}          aria-label="Options"
            icon={<FaAlignJustify/>}
            />
          <MenuList>
          <p className={styles.menuBold}>  Nation</p>
          {iconslinks.map((el)=>(
             <MenuItem  icon={<FaAngleDoubleRight/>}>{el.id}</MenuItem>
          ))}

          <p className={styles.menuBold}>  South</p>
          {iconslinks.map((el)=>(
             <MenuItem  icon={<FaAngleDoubleRight/>}>{el.id}</MenuItem>
          ))}
          <p className={styles.menuBold}>  Entertainment</p>
          {iconslinks.map((el)=>(
             <MenuItem  icon={<FaAngleDoubleRight/>}>{el.id}</MenuItem>
          ))}
           <p className={styles.menuBold}>  Technology</p>
          {iconslinks.map((el)=>(
             <MenuItem  icon={<FaAngleDoubleRight/>}>{el.id}</MenuItem>
          ))}

          <p className={styles.menuBold}>  Sports</p>
          {iconslinks.map((el)=>(
             <MenuItem  icon={<FaAngleDoubleRight/>}>{el.id}</MenuItem>
          ))}
          <p className={styles.menuBold}>  Lifestyle</p>
          {iconslinks.map((el)=>(
             <MenuItem  icon={<FaAngleDoubleRight/>}>{el.id}</MenuItem>
          ))}
           
            
          </MenuList>
        </Menu>
        <p className={styles.navtopheading}>e-Paper | Sunday Chronical</p>
        <Icon className={styles.navIcons} as={FaFacebookSquare}/>
        <Icon className={styles.navIcons} as={FaTwitterSquare}/>
        <Icon className={styles.navIcons} as={FaInstagram}/>
      </div>
      <div className={styles.navtopheading}> 
      <input value="✓" className={styles.inputBox}></input>
            Auto Refresh | Corporate Insolvency Resolution Process</div>
    </div>
  );
};

export default NavbarTop;
