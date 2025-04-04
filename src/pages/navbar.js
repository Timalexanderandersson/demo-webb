import React, { useState } from 'react';
import styles from '../styles/navbar.module.css'; // Importera din CSS-modul

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.brandName}>Frisörsalong</div>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        <span className={styles.burgerIcon}></span>
        <span className={styles.burgerIcon}></span>
        <span className={styles.burgerIcon}></span>
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li><a href="/">Hem</a></li>
        <li><a href="/galleri">Galleri</a></li>
        <li><a href="/about">Om oss</a></li>
        <li><a href="/contact">Kontakt</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
