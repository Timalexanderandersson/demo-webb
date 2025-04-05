import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';  // Importera Helmet för SEO
import styles from '../styles/contact.module.css';
import imagenav from '../assets/nyaare.jpg';  // Se till att bilden har en beskrivande alt-text

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const navigation = useNavigate();

  // Använd useEffect istället för föråldrade livscykelmetoder
  useEffect(() => {
    // Här kan vi lägga till logik som skulle ha varit i componentWillMount
    // Till exempel om vi ville sätta initiala data eller göra API-anrop
  }, []);  // Tom array gör att denna kod körs endast vid första renderingen

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
      {/* SEO metadata */}
      <Helmet>
        <title>Kontakta Oss - Din Hårsalong</title>
        <meta name="description" content="Fyll i vårt formulär för att komma i kontakt med oss. Vi svarar så snart som möjligt. Kontakta Din Hårsalong för alla dina frisörtjänster." />
        <meta property="og:title" content="Kontakta Oss - Din Hårsalong" />
        <meta property="og:description" content="Kontakta oss för frisörtjänster, klippning, färgning och styling. Vi ser fram emot att höra från dig!" />
        <meta property="og:image" content={imagenav} />
        <meta property="og:url" content="https://dinhemsida.se/kontakt" />
      </Helmet>

      <div className={styles.contactContainertwo}>
        {/* Image with alt-text for SEO */}
        <img src={imagenav} alt="Kontakta oss på Din Hårsalong" className={styles.bannerImage} />

        <section className={styles.contactContainertext}>
          <h2 className={styles.title}>Kontakta oss</h2>
          <p className={styles.description}>
            Fyll i formuläret nedan så återkommer vi till dig så snart som möjligt. Vi ser fram emot att höra från dig!
          </p>
        </section>

        <section className={styles.contactFormContainer}>
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
        </section>
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
