
import React, { useContext } from 'react';
import styles from '../Project_Style/SouthPage.module.css';
import {SouthContext} from '../../Context/AppContext';
import { KandaNewsBigBoxContext, KandaNewsSmallBoxContext } from '../../Context/AppContext';
import SouthSection from './SouthSection';
import MidNewsBox from './MidNewsBox';
import Lines from '../Project_Style/Lines';

const SouthMainPage = () => {
  const { southLeftData, southMiddleData, southRightData, SouthTitle } =     useContext(SouthContext);
  const { kandaBigNewss, kandaTitle } = useContext(KandaNewsBigBoxContext);
  const  kandaSmallNewss = useContext(KandaNewsSmallBoxContext)
  console.log(kandaTitle.current)
  return (
    <div className={styles.container}>
      <SouthSection
        southLeftData={southLeftData}

import React, {  useContext } from 'react';
import { SouthContext } from '../../Context/AppContext';
import SouthSection from './SouthSection';

const SouthMainPage = () => {
  
  const {southLeftData, southMiddleData,southRightData, SouthTitle} = useContext(SouthContext)
  return (
    <div>
      <SouthSection southLeftData={southLeftData}

        southMiddleData={southMiddleData}
        southRightData={southRightData}
        SouthTitle={SouthTitle}
      />

      <Lines></Lines>
      <MidNewsBox
        bigNewss={kandaBigNewss}
        smallNewss={kandaSmallNewss}
       title={kandaTitle}
      ></MidNewsBox>
     

    </div>
  );
};

export default SouthMainPage;
