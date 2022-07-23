import React from 'react'
import styles from "../../Project_Style/Footer.module.css"
import { BiSearch } from "react-icons/bi";
import { Icon } from '@chakra-ui/icons';

const FooterSearch = () => {
  return (
    <div className={styles.footerSearchDiv}>
    <input placeholder="Sponsered By Google"></input>
    <button><Icon as ={BiSearch}/> </button>
</div>
  )
}

export default FooterSearch