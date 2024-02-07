import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  const { id, name, email, phone, image } = user;
  return (
    <div className={styles.card}>
      <Link to={`/detail/${id}`} className={styles.link}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.content}>
          <h2 className={styles.name}>Nombre: {name}</h2>
          <p className={styles.email}>Email: {email}</p>
          <p className={styles.phone}>Telefono: {phone}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
