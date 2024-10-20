import React, { useState } from "react";
import styles from "./Menu.module.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div
        className={styles.mobileMenu}
        onClick={toggleMenu}
        aria-expanded={isOpen}
      >
        <div className={`${styles.line} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.line} ${isOpen ? styles.open : ""}`}></div>
        <div className={`${styles.line} ${isOpen ? styles.open : ""}`}></div>
      </div>
      <ul className={`${styles.navList} ${isOpen ? styles.show : ""}`}>
        <li>
          <a href="/escapularios" onClick={handleLinkClick}>
            Escapulários
          </a>
        </li>
        <li>
          <a href="/colares" onClick={handleLinkClick}>
            Colares
          </a>
        </li>
        <li>
          <a href="/conjuntos" onClick={handleLinkClick}>
            Conjuntos
          </a>
        </li>
        <li>
          <a href="/dedeiras" onClick={handleLinkClick}>
            Dedeiras
          </a>
        </li>

        <li>
          <a href="/limpa-prata" onClick={handleLinkClick}>
            Limpa Prata
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
