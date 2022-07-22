import React from 'react';
import styles from '../Project_Style/SouthPage.module.css';
import SouthLeftSideSectio from './SouthLeftSideSectio';
import SouthMiddleSection from './SouthMiddleSection';
import SouthRightSideSection from './SouthRightSideSection';


 
const SouthSection = ({southLeftData, southMiddleData, southRightData, SouthTitle}) => {
 
  return (

    <div >

    <div className={styles.container}>

      <span className={styles.spanTitle}>{SouthTitle.current}</span>
      <div className={styles.southSection}>
        <div className={styles.southLeftSection}>
          <div>
            <SouthLeftSideSectio  southLeftData={southLeftData} />
          </div>
          <div>
            <SouthMiddleSection southMiddleData={southMiddleData} />
          </div>
        </div>

        <div className={styles.rightSouth}>
          <SouthRightSideSection southRightData={southRightData}  />
        </div>
      </div>

    </div>
  );
};

export default SouthSection;
