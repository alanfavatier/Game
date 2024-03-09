import React, { useState } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Card = ({ product }) => {
  const { id, name, precio, image } = product;
  console.log(image);
  const [hovered, setHovered] = useState(false); // Estado para controlar si el cursor está sobre el botón

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    console.log(product);
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.card}>
      <div className={styles.Conteiner}>
      <Link to={`/detail/${id}`} className={styles.link}>
        <img src={image} alt={name} className={styles.image} /> 
      </Link>
        <div className={styles.content}>
          <p className={styles.name}>Nombre: {name}</p>
          <p className={styles.phone}>Precio: {precio}</p>
        </div>
        <div
          className={styles.ContenedorbotonAgregarCarrito}
          onMouseEnter={() => setHovered(true)} // Cuando el cursor entra en el botón
          onMouseLeave={() => setHovered(false)} // Cuando el cursor sale del botón
        >
          {hovered ? ( // Si el cursor está sobre el botón, muestra el icono del carrito
            <button onClick={handleAddToCart} className={styles.iconoCarrito}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          ) : (
            // Si no, muestra el texto "Agregar al carrito"
            <button onClick={handleAddToCart} className={styles.botonAgregarCarrito}>
              Agregar al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;