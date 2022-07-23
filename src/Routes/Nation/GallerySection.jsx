import React, { useContext } from 'react';
import { GalleryRightContext } from '../../Context/AppContext';
import styles from '../../Project_Style/GallerySection.module.css';
import { FaCamera } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';
const GallerySection = () => {
  const gallery = useContext(GalleryRightContext);



  return (
    
    <div className={styles.galleryContainer}>
      
      <div>
        <span className={styles.spanTitle}>GALLERY</span>
        <img
          src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-jcdppve1p57gslfudkjj2o3sd5-20220502133355.Medi.jpeg"
          alt="gallery"
        />
        <p>
          <Icon as={FaCamera} fontSize={27} marginRight={2} />
          In Pictures | Celebrations at Ghazipur border after farm laws repeal
        </p>
      </div>
      <div>
        <span className={styles.spanTitle}>MORE GALLERIES</span>
        <div>
          {gallery.map(e => (
            <div className={styles.galleryRightinner}>
              <img src={e.img} alt="image1" />

              <p  > {e.para}</p>
              
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default GallerySection;
