import React from 'react';
import styles from '../styles/contactinfo.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.textBox}>
          <h2>Hitta till oss</h2>
          <p>
  Vi är ett lokalt hantverkarteam med bas i [Ort], redo att hjälpa dig med allt från småfix till större renoveringar.
  Oavsett om du behöver hjälp med ett nytt kök, badrum eller bara en vägg som ska målas – vi finns här för att göra jobbet rätt från början.
</p>
        </div>
        <div className={styles.mapBox}>
          <iframe
          title="googlemaps skelleftea"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54450.969949909784!2d20.877326546966845!3d64.7553817608884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467ebf279f447101%3A0x4034506de8c8580!2sSkellefte%C3%A5!5e0!3m2!1sen!2sse!4v1743673704357!5m2!1sen!2sse"
            width="500"
            height="200"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
