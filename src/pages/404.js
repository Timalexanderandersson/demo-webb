import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/contact.module.css';
import imagenav from '../assets/nyaare.jpg';

const NotFound = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContainertwo}>
        <img src={imagenav} alt="404 Banner" className={styles.bannerImage} />

        <div className={styles.contactContainertexttwo}>
          <h2 className={styles.titletwo}>404 – Sidan finns inte</h2>
          <p className={styles.descriptiontwo}>
            Hoppsan! Den sidan du försökte nå verkar ha försvunnit i cyberrymden.
          </p>
        </div>

        <div className={styles.contactFormContainertwo}>
          <p className={styles.thankYouText}> Klicka nedan för att återgå till startsidan.</p>
          <div className={styles.centerLinkContainer}>
            <Link to="/" className={styles.backToHomeBtn}>
              Tillbaka till startsidan
            </Link>
          </div>
        </div>
      </div>

      <button 
        className={styles.scrollToTopBtn} 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </div>
  );
};

export default NotFound;
