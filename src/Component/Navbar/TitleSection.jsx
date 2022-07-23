import React, {  useState } from 'react'
import { Heading } from '@chakra-ui/react';
import styles from '../../Project_Style/Navbar.module.css';

const TitleSection = () => {
    let [timeDate, setTimeDate] =  useState(Date().toLocaleString())
  return (
    <div className={styles.logoChronical}>
        <img   src="https://www.deccanchronicle.com/images/DeccanChronicle_Logo.jpg" alt="logoChronical"/>
        <Heading padding={4} as='h6' size='xs'>{timeDate}</Heading>
    </div>
  )
}

export default TitleSection