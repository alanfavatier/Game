import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../redux/actions";
import styles from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Obtenemos el ID del usuario de los parámetros de la ruta
  const user = useSelector((state) => state.userId); // con useSelector me traigo el estado global que defini en el reducer que es userId. este va a contener al usuario segun su id
  useEffect(() => {
    dispatch(getById(id)); //en este punto cuando mi componente se monta va a enviar la accion getById a mi reducer , el reducer va a verificar que tipo / caso de accion es y modifica el payload con el resultado y se lo devuelve a todos los componentes que estan subscriptos.
  }, [dispatch, id]);

  return (
    <div className={styles.detailContainer}>
      <h2>Detalles del usuario</h2>
      <div className={styles.detailItem}>Nombre: {user.name}</div>
      <div className={styles.detailItem}>Email: {user.email}</div>
      <div className={styles.detailItem}>Teléfono: {user.phone}</div>
    </div>
  );
};

export default Detail;