import styles from '../styles/homepage.module.css';
import video from '../assets/newmovie.mp4';
import About from './aboutus';
import ContactInfo from './findus';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
      <div className={styles.homepage}>
        <div className={styles.videoContainer}>
          <video autoPlay loop muted className={styles.backgroundVideo} playsInline>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className={styles.content}>
            <div className={styles.contenttwo}>
            <h1 className={styles.header}>
  Resultat som håller – hantverk med hjärta och precision.
</h1>
<p className={styles.description}>
  Vi bygger, renoverar och fixar – alltid med fokus på kvalitet, tydlig kommunikation och nöjda kunder.
</p>
            </div>
            <div className={styles.buttons}>
              <h3 className={styles.servicesHeader}>Kontakta oss</h3>
              <div className={styles.buttonstwo}>
            
<Link to="/kontakt" className={styles.servicesBtnlink}>
  Kontakta oss
</Link>

<a href="https://www.dinsida.com/bokning" className={styles.servicesBtn} target="_blank" rel="noopener noreferrer">
  Lämna Offert
</a>

              </div>
            </div>
          </div>
        </div>
      </div>

      <About />
      <ContactInfo />
      <button className={styles.scrollToTopBtn} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  ↑
</button>

    </>
  );
};

export default Homepage;
