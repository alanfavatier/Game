// About.js
import React, { useState, useEffect } from 'react';
import styles from "./SobreNosotros.module.css";

const SobreNosotros = ()=> {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      }, (error) => {
        console.error("Error getting geolocation:", error);
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const instagramLink = "https://www.instagram.com/tu_perfil_de_instagram";

  return (
    <div className={styles.aboutContainer}>
      <h2>Acerca de Nosotros</h2>
      {latitude && longitude && (
        <div>
          <p>¡Estás aquí! Latitud: {latitude}, Longitud: {longitude}</p>
          <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=400x300&markers=${latitude},${longitude}&key=TU_API_KEY`} alt="Mapa" className={styles.mapImage} />
        </div>
      )}
      <p>Síguenos en Instagram:</p>
      <a href={instagramLink} target="_blank" rel="noopener noreferrer">
        <img src="" alt="Instagram" className={styles.instagramIcon} />
      </a>
    </div>
  );
}

export default SobreNosotros;