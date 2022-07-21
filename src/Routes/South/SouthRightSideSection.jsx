import React from 'react'
import styles from '../Project_Style/SouthPage.module.css';


const SouthRightSideSection = ({southRightData}) => {
  return (
    <div >
      <span className={styles.spanTitle}>MOST POPULAR</span>
      <div className={styles.southContainer}>
        
      {southRightData.map(e => (
        <div className={styles.southRightBox}>
           <div>
            <p>{e.para}</p>
          </div>
          <div>
            {' '}
            <img src={e.image} alt="image_news" />
          </div>

         
        </div>
      ))}
      </div>
      
    </div>
  )
}

export default SouthRightSideSection