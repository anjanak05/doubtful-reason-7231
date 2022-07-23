import styles from "../../Project_Style/Footer.module.css"
import React from 'react'
import FooterSearch from "./FooterSearch"
import FooterLinks from "./FooterLinks"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
<FooterSearch></FooterSearch>
<FooterLinks></FooterLinks>
</div>
  )
}

export default Footer