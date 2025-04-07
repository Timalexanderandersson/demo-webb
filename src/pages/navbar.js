import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';  // Importera HashLink
import styles from '../styles/navbar.module.css';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.innerdiv}>
        <div className={styles.brandName}>
  GN BYGGNATION</div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <span className={styles.burgerIcon}></span>
          <span className={styles.burgerIcon}></span>
          <span className={styles.burgerIcon}></span>
        </div>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <div className={styles.dropdownLinks}>
            <li><Link className={styles.newlink} to="/" onClick={closeMenu}>Hem</Link></li>
            <li><Link className={styles.newlink} to="/galleri" onClick={closeMenu}>Våra jobb</Link></li>
            <li><HashLink className={styles.newlink} to='/#omoss' onClick={closeMenu}>Om oss</HashLink></li>
            <li><Link className={styles.newlink} to="/offert" onClick={closeMenu}>Offert</Link></li> {/* Använd HashLink */}
            <li><Link className={styles.newlink} to="/kontakt" onClick={closeMenu}>Kontakt</Link></li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
