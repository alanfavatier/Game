import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Carrito.module.css";
import { getCartFromStorage } from "../../redux/actions/index";

const Carrito = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // Almacenar el estado del carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Obtener el estado del carrito desde localStorage al cargar el componente
  useEffect(() => {
    // Obtener el carrito del almacenamiento local al cargar el componente
    dispatch(getCartFromStorage());
  }, []);

  return (
    <div className={styles.conteinerCarrito}>
      <h2>Carrito</h2>
      <div className={styles.productList}>
        {cart.map((product) => (
          <div key={product.id} className={styles.product}>
            <img src={product.image} alt={product.name} />
            <div className={styles.productInfo}>
              <p>{product.name}</p>
              <p>Precio: {product.precio}</p>
              {/* Aquí puedes mostrar más información sobre el producto si es necesario */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrito;
