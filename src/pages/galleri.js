import React, { useState } from 'react';
import styles from '../styles/gallery.module.css';
import imagenav from '../assets/newpictures.webp';

const Gallery = () => {
  const items = ['Bild 1', 'Bild 2', 'Bild 3', 'Bild 4']; // Här lägger du sen in riktiga bilder
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className={styles.galleryContainer}>
        <img src={imagenav} alt="picture" className={styles.newpicturestyle} />
        
      <h2 className={styles.title}>Galleri</h2>
      <div className={styles.carousel}>
        <button className={styles.navBtn} onClick={handlePrev}>←</button>
        
        <div className={styles.imageBox}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${styles.imageItem} ${index === currentIndex ? styles.active : ''}`}
            >
              {item}
            </div>
          ))}
        </div>
        
        <button className={styles.navBtn} onClick={handleNext}>→</button>
      </div>
    </div>
  );
};

export default Gallery;
