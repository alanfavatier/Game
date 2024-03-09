import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ProductsByCategory.module.css";

const ProductsByCategory = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");

  // Lógica para cargar los productos filtrados por categoría
  useEffect(() => {
    // Llamar a tu API o realizar la lógica para obtener los productos filtrados por la categoría seleccionada
    // Actualizar el estado 'products' con los productos obtenidos
  }, [category]);

  return (
    <div className={styles.cont}>
      <h2>Productos de la categoría {category}</h2>
      {/* Mostrar los productos */}
      {products.map((product) => (
        <div key={product.id}>
          {/* Renderizar información del producto */}
        </div>
      ))}
    </div>
  );
};

export default ProductsByCategory;