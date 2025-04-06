import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; // Importera Helmet för SEO
import styles from '../styles/gallery.module.css';
import imagenav from '../assets/nyaare.jpg';

import cooltss from '../assets/cooltss.jpg';
import andrabildenav from '../assets/ännuen.jpg';
import tredje from '../assets/anotherpic.jpg';
import fjärde from '../assets/newpictures.webp';

const Gallery = () => {
  const items = [cooltss, andrabildenav, tredje, fjärde];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className={styles.galleryContainer}>
      {/* Lägg till Helmet för SEO-optimering */}
      <Helmet>
        <title>Våra projekt – Din Hantverkare</title>
        <meta
          name="description"
          content="Upptäck våra tidigare bygg- och renoveringsprojekt. Se före- och efterbilder och inspireras av vad vi kan göra för dig!"
        />
        <meta property="og:title" content="Våra projekt – Din Hantverkare" />
        <meta
          property="og:description"
          content="Kolla in vårt galleri med före- och efterbilder på renoveringar, byggnationer och andra hantverksjobb vi har gjort. Kvalitet i varje detalj!"
        />
        <meta property="og:image" content="https://dinhemsida.se/bilder/renovering.jpg" />
        <meta property="og:url" content="https://dinhemsida.se/vara-projekt" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className={styles.galleryContainertwo}>
        <img src={imagenav} alt="navbar bild" className={styles.newpicturestyle} />
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Våra jobb</h2>
          <p className={styles.description}>
            Här kan ni se några exempel på våra tidigare jobb och tjänster. Bilderna visar vad vi erbjuder och hur resultatet kan se ut – från nöjda kunder till före- och efterbilder.
          </p>
        </div>

        <div className={styles.carousel}>
          <div className={styles.imageBox}>
            <button className={`${styles.navBtn} ${styles.left}`} onClick={handlePrev}>{'<'}</button>

            {items.map((item, index) => (
              <div
                key={index}
                className={`${styles.imageItem} ${index === currentIndex ? styles.active : ''}`}
              >
                {index === currentIndex && (
                  <img src={item} alt={`Bild ${index + 1}`} className={styles.carouselImage} />
                )}
              </div>
            ))}

            <button className={`${styles.navBtn} ${styles.right}`} onClick={handleNext}>{'>'}</button>
          </div>
        </div>
      </div>
      <button className={styles.scrollToTopBtn} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>
    </div>
  );
};

export default Gallery;
