import React from 'react';
import styles from '../styles/kontakt.module.css';
import imagenav from '../assets/newagain.jpg'; 

const Kontakt = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContainertwo}>
        <img 
          src={imagenav} 
          alt="Kontakta oss för hantverkstjänster" 
          className={styles.bannerImage} 
        />
        <section className={styles.contactContainertext}>
          <h2 className={styles.title}>Kontakta oss</h2>
          <p className={styles.description}>
            Vi är tillgängliga för att svara på dina frågor och hjälpa dig med ditt projekt – både vardagar och helger!
          </p>
        </section>

        <section className={styles.contactDetails}>
          <div className={styles.infoItem}>
            <strong> Telefon:</strong> <a className={styles.linkss}  href="tel:+46701234567">070-123 45 67</a>
          </div>
          <div className={styles.infoItem}>
            <strong> E-post:</strong> <a className={styles.linkss} href="mailto:info@dinfirma.se">info@dinfirma.se</a>
          </div>
          <div className={styles.infoItem}>
  <strong> Öppettider:</strong>
  <p>Mån–Fre: 08:00 – 18:00</p>
  <p>Lör: 10:00 – 16:00</p>
  <p>Sön: Endast akuta ärenden</p>
</div>

        </section>

        <section className={styles.contactNote}>
          <p>
            Du kan alltid nå oss via telefon eller e-post. Vi försöker svara inom 24 timmar, oftast mycket snabbare! Tveka inte att höra av dig om du har frågor.
          </p>
        </section>

        <section className={styles.mapContainer}>
          <h3 className={styles.mapTitle}>Hitta till oss</h3>
          <iframe
            title="Google Maps - Skellefteå"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54450.969949909784!2d20.877326546966845!3d64.7553817608884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467ebf279f447101%3A0x4034506de8c8580!2sSkellefte%C3%A5!5e0!3m2!1sen!2sse!4v1743673704357!5m2!1sen!2sse"
            className={styles.map}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
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

export default Kontakt;
