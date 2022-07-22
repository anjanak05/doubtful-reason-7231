import { React, useContext } from 'react';
import { NationContext } from '../../Context/AppContext';
import SouthSection from '../South/SouthSection';

const NationMainPage = () => {

  const {nationRightData,nationLeftData, nationMiddleData,NationTitle} = useContext(NationContext);

  return (
    <div>
      <SouthSection
        SouthTitle={NationTitle}
        southLeftData={nationLeftData}
        southRightData={nationRightData}
        southMiddleData={nationMiddleData}
      />
    </div>
  );
};

export default NationMainPage;
