import { React, useContext } from 'react';
import {
  CrimeBigBoxContext,
  CrimeNewsSmallBoxContext,
  CurrentAffBigBoxContext,
  CurrentAffNewsSmallBoxContext,
  NationContext,
  OtherBigBoxContext,
  OtherNewsSmallBoxContext,
  PoliticsBigBoxContext,
  PoliticsNewsSmallBoxContext,
} from '../../Context/AppContext';
import SouthSection from '../South/SouthSection';
import styles from '../../Project_Style/SouthPage.module.css';
import MidNewsBox from '../South/MidNewsBox';
import Lines from '../../Project_Style/Lines';
import BreadCrumb from '../../Component/BreadCrumb';
import GallerySection from './GallerySection';

const NationMainPage = () => {
  const { NationTitle, nationLeftData, nationMiddleData, nationRightData } = useContext(NationContext);

  const { politicsBigNewss, politicsTitle } = useContext(PoliticsBigBoxContext);
  const politicsSmallNewss = useContext(PoliticsNewsSmallBoxContext);

  const { currentAffBigNewss, currentAffTitle } = useContext( CurrentAffBigBoxContext);
  const currentAffSmallNewss = useContext(CurrentAffNewsSmallBoxContext);

 const { crimeBigNewss, crimeTitle } = useContext( CrimeBigBoxContext);
  const crimeSmallNewss = useContext(CrimeNewsSmallBoxContext);

  const { otherBigNewss, otherTitle } = useContext( OtherBigBoxContext);
  const otherSmallNewss = useContext(OtherNewsSmallBoxContext);
  return (
    <div className={styles.container}>
      <BreadCrumb breadTitle={NationTitle}></BreadCrumb>
      <SouthSection
        SouthTitle={NationTitle}
        southLeftData={nationLeftData}
        southRightData={nationRightData}
        southMiddleData={nationMiddleData}
      />
      <GallerySection></GallerySection>
      <Lines></Lines>
      <MidNewsBox bigNewss={politicsBigNewss} smallNewss={politicsSmallNewss} title={politicsTitle} ></MidNewsBox>
      <Lines></Lines>
      <MidNewsBox bigNewss={currentAffBigNewss} smallNewss={currentAffSmallNewss} title={currentAffTitle}></MidNewsBox>
      <Lines></Lines>
      <MidNewsBox bigNewss={crimeBigNewss} smallNewss={crimeSmallNewss} title={crimeTitle} ></MidNewsBox>
      <Lines></Lines>
      <MidNewsBox bigNewss={otherBigNewss} smallNewss={otherSmallNewss} title={otherTitle}></MidNewsBox>
    
    </div>
  );
};

export default NationMainPage;
