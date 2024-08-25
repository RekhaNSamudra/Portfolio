import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div>
        <nav className={styles.navbar}>
          <div>
            <img src={logo} alt="Logo" className={styles.logo} />
          </div>

          <ul className={`${styles.navmenu} ${isMenuOpen ? styles.open : ""}`}>
            <li className={styles.menulink}>
              <a href="#about">About</a>
            </li>
            <li className={styles.menulink}>
              <a href="#skills">Skills</a>
            </li>
            <li className={styles.menulink}>
              <a href="#projects">Projects</a>
            </li>
            <li className={styles.menulink}>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className={styles.menuIcon} onClick={toggleMenu}>
            {isMenuOpen ? (
              <i className="bi bi-x-lg"></i> // Bootstrap close icon
            ) : (
              <i className="bi bi-list"></i> // Bootstrap hamburger icon
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;