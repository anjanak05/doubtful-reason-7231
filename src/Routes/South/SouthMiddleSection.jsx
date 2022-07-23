import React from 'react';
import styles from '../../Project_Style/SouthPage.module.css';

const SouthMiddleSection = ({ southMiddleData }) => {
  return (
    <div>
      {southMiddleData.map(e => (
        <div className={styles.southMiddleBox}>
          <div>
            {' '}
            <img src={e.image} alt="image_news" />
          </div>

          <div>
            <p>{e.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SouthMiddleSection;
