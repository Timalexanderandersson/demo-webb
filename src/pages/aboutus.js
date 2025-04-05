import React from 'react';
import { Helmet } from 'react-helmet';  // Importera Helmet
import styles from '../styles/about.module.css';
import aboutImage from '../assets/nybild.jpg'; // Byt ut mot din bild

const About = () => {
  return (
    <div className={styles.aboutSection} id="omoss">
      {/* Här används React Helmet för att dynamiskt ändra meta-taggar */}
      <Helmet>
        <title>Om oss - Din Hårsalong</title>
        <meta
          name="description"
          content="Lär dig mer om Din Hårsalong. Vi erbjuder professionella frisörtjänster för klippning, färgning och styling i [Stad]."
        />
        <meta property="og:title" content="Om oss - Din Hårsalong" />
        <meta
          property="og:description"
          content="Vi erbjuder professionella frisörtjänster som klippning, färgning och styling i [Stad]. Besök oss för en unik upplevelse."
        />
        <meta property="og:image" content="https://dinhemsida.se/your-image.jpg" />
        <meta property="og:url" content="https://dinhemsida.se" />
      </Helmet>

      <div className={styles.aboutContainer}>
        <div className={styles.textContainer}>
          <h2>Om oss</h2>
          <p>
            Välkommen till Din Hårsalong, din lokala expert på professionella frisörtjänster i [Stad]. Vi erbjuder klippning, färgning, styling och mycket mer, alltid med personlig service och högsta kvalitet. Vår erfarna personal ser till att du känner dig som hemma och att du lämnar oss nöjd varje gång. Kom och upplev varför våra kunder älskar oss!
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={aboutImage} alt="Vår frisörsalong" />
        </div>
      </div>
    </div>
  );
};

export default About;
