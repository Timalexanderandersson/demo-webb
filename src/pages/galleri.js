import React from 'react';
import { Helmet } from 'react-helmet'; // Importera Helmet för SEO
import styles from '../styles/gallery.module.css';
import imagenav from '../assets/newagain.jpg';
import cooltss from '../assets/ballkong.jpg';
import andrabildenav from '../assets/nyabalkong.jpg';
import tredje from '../assets/roofers-2891664_1280.jpg';
import fjärde from '../assets/fasadbyte.jpg';

const Gallery = () => {
  const items = [
    { image: cooltss, title: 'Veranda', description: 'Byggnation av en elegant veranda, perfekt för att förlänga sommaren och skapa en härlig utomhusmiljö.' },
    { image: andrabildenav, title: 'Balkonger', description: 'Renovering av balkonger med hållbara material och en design som ger både stil och funktionalitet.' },
    { image: tredje, title: 'Takläggning', description: 'Ny takläggning med högkvalitativa takpannor för att säkerställa lång livslängd och bästa skydd mot väder och vind.' },
    { image: fjärde, title: 'Fasadbyten', description: 'Fullständig renovering av fasader med fokus på både estetik och hållbarhet för att förbättra både utseende och energioptimering.' }
  ];

  return (
    <div className={styles.galleryContainer}>
      {/* Lägg till Helmet för SEO-optimering */}
      <Helmet>
        <title>Våra projekt – Din Hantverkare</title>
        <meta
          name="description"
          content="Upptäck våra tidigare bygg- och renoveringsprojekt. Se före- och efterbilder och inspireras av vad vi kan göra för dig!"
        />
        <meta property="og:title" content="Våra projekt – Din Hantverkare" />
        <meta
          property="og:description"
          content="Kolla in vårt galleri med före- och efterbilder på renoveringar, byggnationer och andra hantverksjobb vi har gjort. Kvalitet i varje detalj!"
        />
        <meta property="og:image" content="https://dinhemsida.se/bilder/renovering.jpg" />
        <meta property="og:url" content="https://dinhemsida.se/vara-projekt" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className={styles.galleryContainertwo}>
        <img src={imagenav} alt="navbar bild" className={styles.newpicturestyle} />
        <div className={styles.textContainer}>
        <h2 className={styles.title}>Våra Tjänster</h2>
<p className={styles.description}>
  Vi erbjuder ett brett utbud av hantverkstjänster för både privatpersoner och företag. Oavsett om det handlar om att bygga en ny veranda, lägga om taket, byta fasad eller renovera balkonger – vi levererar alltid med fokus på kvalitet, noggrannhet och kundnöjdhet. Här nedan kan du se några exempel på tidigare projekt vi har genomfört, och få en känsla för vad vi kan skapa tillsammans med dig.
</p>

        </div>

        <div className={styles.imageCards}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <img src={item.image} alt={`Bild för ${item.title}`} className={styles.cardImage} />
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p> {/* Här läggs beskrivningen till */}
            </div>
          ))}
        </div>
      </div>

      <button className={styles.scrollToTopBtn} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>
    </div>
  );
};

export default Gallery;
