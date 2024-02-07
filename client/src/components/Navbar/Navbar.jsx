import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getByName } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faUsers,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const home = <FontAwesomeIcon icon={faHome} />;
  const favorite = <FontAwesomeIcon icon={faHeart} />;
  const user = <FontAwesomeIcon icon={faUsers} />;
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // Definir el estado para el menú hamburguesa

  function handleChange(e) {
    e.preventDefault();
    setSearchString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getByName(searchString));
  }

  return (
    <header className={styles.contenedor}>
      <nav className={styles.navbar}>
        <img
          src="/goku.jpg"
          alt="Logo Game Over"
          className={styles.navimag}
        />
        <ul className={styles.ulcont}>
          <li>
            <Link to="/">{home} Tienda</Link>
          </li>
          <li>
            <Link to="/top">{favorite} Los Más Votados</Link>
          </li>
          <li>
            <Link to="/about">{user} Quienes somos</Link>
          </li>
        </ul>
        {/* Botón de menú hamburguesa */}
        <button
          className={styles.menuHamburguesa}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
      {/* Menú hamburguesa */}
      {menuOpen && (
        <ul className={styles.ulHamburguesa}>
          <li className={styles.liHamburguesa}>
            <Link to="/">{home} Tienda</Link>
          </li>
          <li className={styles.liHamburguesa}>
            <Link to="/top">{favorite} Los Más Votados</Link>
          </li>
          <li className={styles.liHamburguesa}>
            <Link to="/about">{user} Quienes somos</Link>
          </li>
        </ul>
      )}
      <form onChange={handleChange} className={styles.formulario}>
        <input type="text" placeholder="Busqueda" className={styles.campo} />
        <button type="submit" onClick={handleSubmit} className={styles.boton}>
          Buscar
        </button>
      </form>
    </header>
  );
};

export default Navbar;
