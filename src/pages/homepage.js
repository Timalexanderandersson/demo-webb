import styles from '../styles/homepage.module.css';
import video from '../assets/newvideo.mp4'; // Justera sökvägen om det behövs
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
                Skapa din perfekta stil – vi har erfarenheten och passionen!
              </h1>
              <p className={styles.description}>
                Vi strävar efter att skapa en varm och inbjudande atmosfär där du kan slappna av och känna dig som hemma.
              </p>
            </div>

            <div className={styles.buttons}>
              <h3 className={styles.servicesHeader}>Kontakta oss</h3>
              <div className={styles.buttonstwo}>
            
<Link to="/kontakt" className={styles.servicesBtnlink}>
  Kontakta oss
</Link>

<a href="https://www.dinsida.com/bokning" className={styles.servicesBtn} target="_blank" rel="noopener noreferrer">
  Boka tid
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
