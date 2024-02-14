import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getByName } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Link, useLocation  } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUserPlus ,
  faShoppingBag,
  faStar,
  faBars,
  faShoppingCart,
  faSearch 
} from "@fortawesome/free-solid-svg-icons";

import { useHistory } from "react-router-dom";
const Navbar = () => {
  const username = localStorage.getItem("username");
  const mostVotedIcon = <FontAwesomeIcon icon={faStar} />;
  const lupa = <FontAwesomeIcon icon={faSearch } />;
  const registerIcon = <FontAwesomeIcon icon={faUserPlus} />;
  const user = <FontAwesomeIcon icon={faUsers} />;
  const shopIcon = <FontAwesomeIcon icon={faShoppingBag} />;
  const carrito = <FontAwesomeIcon icon={faShoppingCart} />;
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // Definir el estado para el menú hamburguesa
  const location = useLocation();

  const history = useHistory();
  
  const handleLogout = () => {
    localStorage.removeItem("token"); // Eliminar token del almacenamiento local
    localStorage.removeItem("username"); // Eliminar nombre de usuario del almacenamiento local
    history.push("/"); // Redirigir a la página de inicio
  };
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
        <img src="/logo.png" alt="Logo" className={styles.navimag} />
        <ul className={styles.ulcont}>
          
          <li className={`${styles.licont} ${location.pathname === '/' && styles.active}`}>
            <Link to="/"> {/* {shopIcon} */} Tienda</Link>
          </li>
          <li className={`${styles.licont} ${location.pathname === '/top' && styles.active}`}>
            <Link to="/top">{/* {mostVotedIcon}  */}Los Más Votados</Link>
          </li>
          <li className={`${styles.licont} ${location.pathname === '/about' && styles.active}`}>
            <Link to="/about"> {/* {user}  */}Quienes somos</Link>
          </li>
          {username ? (
            <li className={`${styles.licont} ${location.pathname === '/registro' && styles.active}`} >
              <span>Hola, {username}</span>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </li>
          ) : (
            <li className={`${styles.licont} ${location.pathname === '/registro' && styles.active}`}>
              <Link to="/registro">{/* {registerIcon} */}Login </Link>
            </li>
          )}
          <li className={`${styles.licont} ${location.pathname === '/carrito' && styles.active}`}>
            <Link to="/carrito">{/* {registerIcon} */} {carrito}</Link>
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
            <Link to="/"> {shopIcon} Tienda</Link>
          </li>
          <li className={styles.liHamburguesa}>
            <Link to="/top">{mostVotedIcon} Los Más Votados</Link>
          </li>
          <li className={styles.liHamburguesa}>
            <Link to="/about"> {user} Quienes somos</Link>
          </li>
          <li className={styles.liHamburguesa}>
            <Link to="/registro">{registerIcon} Registro</Link>
          </li>
        </ul>
      )}
      <form onChange={handleChange} className={styles.formulario}>
        <input type="text" placeholder="Busqueda" className={styles.campo} />
        <button type="submit" onClick={handleSubmit} className={styles.boton}>
          {lupa}
        </button>
      </form>
    </header>
  );
};

export default Navbar;
