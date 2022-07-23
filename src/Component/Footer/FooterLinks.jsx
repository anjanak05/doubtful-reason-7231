import React from 'react';
import styles from '../../Project_Style/Footer.module.css';

let footLinks = [
  'HOME',
  'ASIAN',
  'AGE',
  'ANDHRABHOOMI',
  'FINANCIAL  CHRONICLE',
  'ABOUT US',
  'CONTACT US',
  'CLASSIFIEDS',
  'BOOK CLASSIFIEDS',
  'FEEDBACK',
  'CAREERS',
  'E-PAPER',
  'PRIVACY POLICY',
];
const FooterLinks = () => {
  return (
    <div style={{ width: '90%', margin: 'auto' }}>
      <div className={styles.footerLinksDiv}>
        {footLinks.map(e => (
          <div>{e}</div>
        ))}
      </div>
      <p>Copyright © 2015 - 2022 Deccan Chronicle.</p>
      <p>Designed, Developed & Maintained By Daksham</p>
    </div>
  );
};

export default FooterLinks;
