import React from 'react';
import styles from '../styles/homepage.module.css';
import video from '../assets/newvideo.mp4'; // Justera sökvägen om det behövs

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted className={styles.backgroundVideo}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.content}>
            <div>
            <h1 className={styles.header}>Välkommen till vår frisörsalong</h1>
            <p className={styles.description}>Här på vår salong erbjuder vi bästa servicen för ditt hår.</p>

            </div>
          
          <div className={styles.buttons}>
            <button className={styles.servicesBtn}>Våra tjänster</button>
            <button className={styles.bookBtn}>Boka tid</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
