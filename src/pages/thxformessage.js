import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/contact.module.css';
import imagenav from '../assets/nyaare.jpg';

const TackFörDittMeddelande = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContainertwo}>
        <img src={imagenav} alt="Top Banner" className={styles.bannerImage} />

        <div className={styles.contactContainertexttwo}>
          <h2 className={styles.titletwo}>Tack för ditt meddelande!</h2>
          <p className={styles.descriptiontwo}>
            Vi har tagit emot ditt meddelande och återkommer så snart vi kan. Ha en fantastisk dag!
          </p>
        </div>

        <div className={styles.contactFormContainertwo}>
          <p className={styles.thankYouText}> Du kan nu återgå till Startsidan.</p>
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

export default TackFörDittMeddelande;
