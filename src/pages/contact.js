import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/contact.module.css';
import imagenav from '../assets/nyaare.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const navigation = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => navigation("/tackfördittmeddelande"))
      .catch((error) => alert("Error submitting form: " + error));
  };

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
          <form 
            name="kontakt" 
            method="POST" 
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className={styles.contactForm}
          >
            <input type="hidden" name="form-name" value="kontakt" />
            <p hidden>
              <label>
                Don’t fill this out if you're human:
                <input name="bot-field" onChange={handleInputChange} />
              </label>
            </p>

            <input 
              type="text" 
              name="name" 
              placeholder="Ditt namn" 
              className={styles.inputField} 
              value={formData.name}
              onChange={handleInputChange}
              required 
            />

            <input 
              type="email" 
              name="email" 
              placeholder="Din e-post" 
              className={styles.inputField} 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />

            <textarea 
              name="message" 
              placeholder="Ditt meddelande" 
              className={styles.textArea} 
              rows="6"
              value={formData.message}
              onChange={handleInputChange}
              required 
            />

            <button type="submit" className={styles.submitBtn}>Skicka meddelande</button>
          </form>
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

export default Contact;
