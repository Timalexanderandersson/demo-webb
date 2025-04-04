import React, { useState } from 'react';
import styles from '../styles/navbar.module.css'; // Importera din CSS-modul

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.innerdiv}>
        <div className={styles.brandName}>Frisörsalong</div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <span className={styles.burgerIcon}></span>
          <span className={styles.burgerIcon}></span>
          <span className={styles.burgerIcon}></span>
        </div>

        <div>
          <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
            {/* Wrapper för länkar i dropdown */}
            <div className={styles.dropdownLinks}>
              <li><a className={styles.newlink} href="/">Hem</a></li>
              <li><a className={styles.newlink} href="/galleri">Galleri</a></li>
              <li><a className={styles.newlink} href="/about">Om oss</a></li>
              <li><a className={styles.newlink} href="/contact">Kontakt</a></li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
