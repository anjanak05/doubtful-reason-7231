import React from 'react'
import styles from '../Project_Style/SouthPage.module.css';

const SouthLeftSideSectio = ({southLeftData}) => {
  return (
    <div>
 {southLeftData.map(e => (
              <div className={styles.southBox}>
                <img src={e.image} alt="image_news" />
                <h1> {e.heading}</h1>
                <p>{e.subpara}</p>
              </div>
            ))}

    </div>
  )
}

export default SouthLeftSideSectio