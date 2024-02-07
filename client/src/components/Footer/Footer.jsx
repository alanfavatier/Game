import React from "react";
import styles from "./Footer.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importa FontAwesome aquí

const Footer = () => {
  return (
    <footer className={styles.contenedorFooter}>
      <div className={styles.enlaces}>
        <a href="/about">Sobre Nosotros</a>
        <a href="/contact">Contacto</a>
        <a href="/terms">Términos y Condiciones</a>
      </div>
      <div className={styles.redesSociales}>
        <a href="https://facebook.com">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p>© 2024 Tu Tienda de Electrónica. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
