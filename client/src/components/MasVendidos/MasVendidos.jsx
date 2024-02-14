import React from "react";
import styles from "./MasVendidos.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const MasVendidos = () => {
  return (
    <div>
      <div className={styles.container}>
        {/* Categoría: Audio */}
        <Link to="/top" className={styles.category}>
          Destacado
        </Link>
        {/* Categoría: Gaming */}
        <Link to="/sale" className={styles.category}>
          Mas vendido
        </Link>
        {/* Categoría: Notebooks */}
        <Link to="/new" className={styles.category}>
          Novedades
        </Link>
      </div>
    </div>
  );
};

export default MasVendidos;
