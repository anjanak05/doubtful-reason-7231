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
    </div>
  );
};

export default SouthMainPage;
