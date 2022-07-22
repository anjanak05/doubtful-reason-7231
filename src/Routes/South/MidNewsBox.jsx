import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import styles from '../Project_Style/SouthPage.module.css';
// import { KandaNewsBigBoxContext, KandaNewsSmallBoxContext } from '../../Context/AppContext';

const MidNewsBox = ({bigNewss,  smallNewss, title}) => {
  // const { kandaBigNewss, kandaTitle } = useContext(KandaNewsBigBoxContext);
  // const  kandaSmallNewss = useContext(KandaNewsSmallBoxContext)
  // console.log(kandaTitle.current)
  return (
    <div>
      <span className={styles.spanTitle}>{title.current}</span>
      <SimpleGrid
        className={styles.newsBox}
        columns={{
          base: 1,
          sm: 2,
          md: 3,
          '2xl': 4,
        }}
      >
        {bigNewss.map(e => (
          <div>
            <img  src={e.image} alt="cdvd" />
            <h1> {e.para}</h1>
          </div>
        ))}

        {/* <div className={styles.kandaInnerSmallBox} > */}
         {smallNewss.map(e => (
          <div className={styles.kandaInnerBox}>
            <img src={e.image} alt="cdvd" />
            <h2> {e.para}</h2>
          </div>
        ))}
        {/* </div> */}
      </SimpleGrid>
      
    </div>
  );
};

export default MidNewsBox;
