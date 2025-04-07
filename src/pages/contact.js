import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/contact.module.css';
import imagenav from '../assets/newagain.jpg'; 

const QuoteRequest = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', 
    projectDescription: '',
    projectDetails: '',
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

        <img src={imagenav} alt="Begär en offert för hantverkstjänster" className={styles.bannerImage} />

        <section className={styles.contactContainertext}>
          <h2 className={styles.title}>Begär en Offert</h2>
          <p className={styles.description}>
            Fyll i formuläret nedan för att få en offert på vårt hantverksarbete. Vi återkommer så snart som möjligt med en kostnadsfri offert baserat på ditt projekt.
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

            {/* Lägg till fält för telefonnummer */}
            <input
              type="tel"
              name="phone"
              placeholder="Ditt telefonnummer"
              className={styles.inputField}
              value={formData.phone}
              onChange={handleInputChange}
              required
            />

            <textarea
            name="projectDescription"
              placeholder="Kort beskrivning av projektet"
              className={styles.textArea}
              rows="4"
              value={formData.projectDescription}
              onChange={handleInputChange}
              required
            />

            <textarea
              name="projectDetails"
              placeholder="Detaljer om projektet (t.ex. mått, material, specifika önskemål)"
              className={styles.textArea}
              rows="6"
              value={formData.projectDetails}
              onChange={handleInputChange}
              required
            />

            <button type="submit" className={styles.submitBtn}>Begär Offert</button>
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

export default QuoteRequest;
