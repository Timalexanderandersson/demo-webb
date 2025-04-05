import React from 'react';
import styles from '../styles/contact.module.css';
import imagenav from '../assets/nyaare.jpg';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContainertwo}>
      <img src={imagenav} alt="Top Banner" className={styles.bannerImage} />
      <div className={styles.contactContainertext}>
      <h2 className={styles.title}>Kontakta oss</h2>
      <p className={styles.description}>
        Fyll i formuläret nedan så återkommer vi till dig så snart som möjligt. Vi ser fram emot att höra från dig!
      </p>

      </div>
      
<div className={styles.contactFormContainer}>
<form className={styles.contactForm}>
        <input type="text" name="name" placeholder="Ditt namn" className={styles.inputField} required />
        <input type="email" name="email" placeholder="Din e-post" className={styles.inputField} required />
        <textarea name="message" placeholder="Ditt meddelande" className={styles.textArea} rows="6" required />
        <button type="submit" className={styles.submitBtn}>Skicka meddelande</button>
      </form>


</div>
      
      </div>
      
     
      <button className={styles.scrollToTopBtn} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑
        </button>
      
    </div>
  );
};

export default Contact;
