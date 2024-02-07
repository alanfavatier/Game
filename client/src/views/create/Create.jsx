/* import React, { useState } from "react";

const Create = () => {

  const [input, setInput]= useState({
    email:"",
    name:"",
    phone:""
  })
  const [error, setError]= useState({
    email:"",
    name:"",
    phone:""
  })

const validate=(input)=>{
  if (){

    console.log("Error en el email");
  }
  console.log("Tdo OK");
}

  function handleChange(e){
    
    setInput({...input, [e.target.name]:e.target.value}) //con esto hago que el input se setee con los valores que escribo , pero como tengo varios inputs le pongo ...input para que no se pisen los valores anteriores,
    
    validate({
      ...input,
      [e.target.name]:e.target.value //esto lo hago para que al mismo tiempo que estoy escribiendo tambien estoy validando
    })
   
  }
  return (
    <div>
      <form action="" onSubmit={""}>
        <div>
          <label htmlFor="">Nombre
            <input type="text" name="name" value={input.value} onChange={handleChange}/>
          </label>
        </div>
        <div>
          <label htmlFor="">Email
            <input type="text" name="email" value={input.value} onChange={handleChange}/>
          </label>
        </div>
        <div>
          <label htmlFor="">Telefono
            <input type="text" name="phone" value={input.value} onChange={handleChange}/>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Create; */

import axios from "axios";
import React, { useState } from "react";
import validator from "./Validator";
import styles from "./Create.module.css"; // Importa los estilos CSS Modules
import { Link } from "react-router-dom";

const Create = () => {
  const [errors, setErrors] = useState({});
  const [dogData, setDogData] = useState({
    email: "",
    name: "",
    phone: "",
    image: null,
  });

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Selecciona el primer archivo del input
    setDogData((prevData) => ({
      ...prevData,
      image: file, // Almacena el archivo en el estado
    }));
    // No se validará la imagen en este momento, pero podrías agregar validaciones si lo deseas
  };

  const handleChange = (e) => {
    const newDogData = { ...dogData, [e.target.name]: e.target.value };
    setDogData(newDogData);

    // Validar el formulario después de cada cambio
    const validationErrors = validator(newDogData);
    setErrors(validationErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar si todos los campos están vacíos
    if (
      Object.values(dogData).every((value) => value === "") ||
      Object.values(dogData).every((value) => value === null)
    ) {
      alert("Faltan datos. Todos los campos son obligatorios.");
      return;
    }
    // Validar el formulario antes de enviar
    const validationErrors = validator(dogData);
    setErrors(validationErrors);

    if (Object.keys(errors).length === 0) {
      //Object.keys(errors): Devuelve un array con las claves del objeto errors

      // Crear un FormData para enviar la imagen
      const formData = new FormData();
      formData.append("image", dogData.image);

      // Agregar el resto de los datos del perro al FormData
      Object.entries(dogData).forEach(([key, value]) => {
        if (key !== "image") {
          formData.append(key, value);
        }
      });

      try {
        const response = await axios.post(
          `http://localhost:3001/users/`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Especifica el tipo de contenido como FormData
            },
          }
        );
        console.log("Respuesta de la base de datos:", response.data);
        setSuccessMessage(alert("perro creado exitosamente"));
        window.location.href = "/home";
        setErrorMessage(null);
      } catch (error) {
        console.error("Error al enviar datos a la base de datos:", error);
      }
    } else {
      console.log("Formulario con errores");
      setErrorMessage(null);
    }
  };

  const handleCardClick = () => {
    window.location.href = `/home`;
  };

  return (
    <div className={styles.formContainer}>
      <Link to={`/home`} onClick={handleCardClick}>
        <button className={styles.btnvolver}>
          Volver a la Pagina de Inicio
        </button>
      </Link>
      <form onSubmit={handleSubmit}>
        {successMessage && (
          <p className={styles.successMessage}>{successMessage}</p>
        )}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">
            Nombre
          </label>
          <input
            className={styles.input}
            name="name"
            type="text"
            placeholder="Nombre..."
            value={dogData.name}
            onChange={handleChange}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">
            email
          </label>
          <input
            className={styles.input}
            name="email"
            type="text"
            placeholder="email..."
            value={dogData.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="phone">
            phone
          </label>
          <input
            className={styles.input}
            name="phone"
            type="number"
            placeholder="phone..."
            value={dogData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="image">
            Imagen
          </label>
          <input
            className={styles.input}
            name="image"
            value={dogData.image}
            type="file" // Cambiado a type="file"
            accept=".jpg, .jpeg, .png" // Especifica los tipos de archivos aceptados
            onChange={handleImageChange}
          />
          {errors.image && <p className={styles.error}>{errors.image}</p>}
        </div>

        {errors.name ? null : (
          <button type="submit" className={styles.btncrearraza}>
            Crear Raza
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
