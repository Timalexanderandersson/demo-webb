import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importera Link
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Stänger menyn
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
            <div className={styles.dropdownLinks}>
              <li><Link className={styles.newlink} to="/" onClick={closeMenu}>Hem</Link></li>
              <li><Link className={styles.newlink} to="/galleri" onClick={closeMenu}>Galleri</Link></li>
              <li><Link className={styles.newlink} to="/omoss" onClick={closeMenu}>Om oss</Link></li>
              <li><Link className={styles.newlink} to="/kontakt" onClick={closeMenu}>Kontakt</Link></li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
