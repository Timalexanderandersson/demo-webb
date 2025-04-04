import React from 'react';
import styles from '../styles/contact.module.css';
import imagenav from '../assets/newpictures.webp';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <img src={imagenav} alt="Top Banner" className={styles.bannerImage} />
      
      <h2 className={styles.title}>Kontakta oss</h2>
      <p className={styles.description}>
        Fyll i formuläret nedan så återkommer vi till dig så snart som möjligt. Vi ser fram emot att höra från dig!
      </p>

      <form className={styles.contactForm}>
        <input type="text" name="name" placeholder="Ditt namn" className={styles.inputField} required />
        <input type="email" name="email" placeholder="Din e-post" className={styles.inputField} required />
        <textarea name="message" placeholder="Ditt meddelande" className={styles.textArea} rows="6" required />
        <button type="submit" className={styles.submitBtn}>Skicka meddelande</button>
      </form>
    </div>
  );
};

export default Contact;
