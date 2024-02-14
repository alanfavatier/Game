import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../redux/actions";
import styles from "./Detail.module.css";
import Footer from "../../components/Footer/Footer";
import { addToCart } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Detail = () => {

  const [hovered, setHovered] = useState(false); // Estado para controlar si el cursor está sobre el botón
  const { id } = useParams(); // Obtenemos el ID del usuario de los parámetros de la ruta
  const user = useSelector((state) => state.userId); // con useSelector me traigo el estado global que defini en el reducer que es userId. este va a contener al usuario segun su id
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(user));
  };

 
  useEffect(() => {
    dispatch(getById(id)); //en este punto cuando mi componente se monta va a enviar la accion getById a mi reducer , el reducer va a verificar que tipo / caso de accion es y modifica el payload con el resultado y se lo devuelve a todos los componentes que estan subscriptos.
  }, [dispatch, id]);

  return (
    <>
      <div className={styles.detailContainer}>
        <div className={styles.content}>
        <img src={user.image} alt={user.name} className={styles.image} />
          <p className={styles.name}>{user.name}</p>
          <p className={styles.name}>Precio: {user.precio}</p>
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
      <div>
      <p className={styles.name}>Descripcion: {user.descripcion}</p>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
