import React from 'react';
import styles from '../styles/about.module.css';
import aboutImage from '../assets/nybild.jpg'; // Byt ut mot din bild

const About = () => {
  return (
    <div className={styles.aboutSection} id="omoss">
      <div className={styles.aboutContainer}>
        <div className={styles.textContainer}>
          <h2>Om oss</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
            Fusce sit amet lacus eget justo viverra tempus. Integer tincidunt, neque eget 
            posuere bibendum, nisl lacus consectetur elit, non sagittis erat odio in nulla.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={aboutImage} alt="Om oss" />
        </div>
      </div>
    </div>
  );
};

export default About;
