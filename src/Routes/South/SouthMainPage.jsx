import React, { useContext } from 'react';
import styles from '../../Project_Style/SouthPage.module.css';
import {
  AndhraBigBoxContext,
  AndhraNewsSmallBoxContext,
  KarnatkBigBoxContext,
  KarnatkNewsSmallBoxContext,
  KeralaBigBoxContext,
  KeralaNewsSmallBoxContext,
  SouthContext,
  TamilBigBoxContext,
  TamilNewsSmallBoxContext,
  TelanganaNewsBigBoxContext,
  TelanganaNewsSmallBoxContext,
} from '../../Context/AppContext';
import SouthSection from './SouthSection';
import MidNewsBox from './MidNewsBox';
import Lines from '../../Project_Style/Lines';
import BreadCrumb from '../../Component/BreadCrumb';


const SouthMainPage = () => {
  const { southLeftData, southMiddleData, southRightData, SouthTitle } =
   useContext(SouthContext);
  
  const { telanganaBigNewss, telanganaTitle } = useContext(TelanganaNewsBigBoxContext);
  const telanganaSmallNewss = useContext(TelanganaNewsSmallBoxContext);
  
  const {tamilBigNewss, tamilTitle} = useContext(TamilBigBoxContext)
  const tamilSmallNewss  = useContext(TamilNewsSmallBoxContext)
  
  const { andhraBigNewss, andhraTitle }= useContext(AndhraBigBoxContext)
  const andhraSmallNewss = useContext(AndhraNewsSmallBoxContext)

  const { keralaBigNewss, keralaTitle } = useContext(KeralaBigBoxContext)
  const keralaSmallNewss = useContext(KeralaNewsSmallBoxContext)

  const { karnatkBigNewss, karnatkTitle } = useContext(KarnatkBigBoxContext)
  const karnatkSmallNewss = useContext(KarnatkNewsSmallBoxContext)
  return (
    <div className={styles.container}>
      <BreadCrumb breadTitle={SouthTitle}></BreadCrumb>
      <SouthSection
        southLeftData={southLeftData}
        southMiddleData={southMiddleData}
        southRightData={southRightData}
        SouthTitle={SouthTitle}
      />
      <Lines></Lines>
      <MidNewsBox bigNewss={telanganaBigNewss} smallNewss={telanganaSmallNewss} title={telanganaTitle}></MidNewsBox>
      
       <Lines></Lines>
       <MidNewsBox bigNewss={andhraBigNewss} smallNewss={andhraSmallNewss} title={andhraTitle}></MidNewsBox>
       <Lines></Lines>
       <MidNewsBox bigNewss={tamilBigNewss} smallNewss={tamilSmallNewss} title={tamilTitle}></MidNewsBox>
        <Lines></Lines>
       <MidNewsBox bigNewss={karnatkBigNewss} smallNewss={karnatkSmallNewss} title={karnatkTitle}></MidNewsBox>
       <Lines></Lines>
       <MidNewsBox bigNewss={keralaBigNewss} smallNewss={keralaSmallNewss} title={keralaTitle}></MidNewsBox>
           </div>
  );
};

export default SouthMainPage;
