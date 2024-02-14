import React, { useState } from "react";
import styles from "./registro.module.css";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons"; */
import { useHistory } from "react-router-dom";

/* const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />;
const userIcon = <FontAwesomeIcon icon={faUser} />;
const lockIcon = <FontAwesomeIcon icon={faLock} />; */

const Registro = () => {
  const history = useHistory();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/login",
        loginFormData
      );
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.user.name);
        history.push("/"); // Redirigir al usuario a la página principal
      } else {
        // Manejar errores de inicio de sesión
        console.error("Inicio de sesión fallido");
      }
    } catch (error) {
      // Manejar errores de red o del servidor
      console.error("Error al iniciar sesión:", error.message);
    }
  };

  const [showRegisterForm, setShowRegisterForm] = useState(true);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [welcomeMessageLogin, setWelcomeMessageLogin] = useState("");
  const [showLoginButton, setShowLoginButton] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const showLoginFormView = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
    setShowLoginButton(false); // Ocultar el botón de iniciar sesión
  };

  const showRegisterFormView = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
    setShowLoginButton(true); // Mostrar el botón de iniciar sesión
  };

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [createdUser, setCreatedUser] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/users/create",
        formData
      );
      if (!response.data) {
        throw new Error("Error al registrar usuario");
      }
      setMessage("Usuario registrado correctamente");
      setCreatedUser(response.data.user);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.user.name);
      history.push("/");
    } catch (error) {
      setMessage("Error al registrar usuario");
      console.error(error.message);
    }
  };

  return (
    <>
      <div className={styles.formContainer}>
        {showRegisterForm && (
          <>
            <h1 className={styles.formTitle}>Registrarse</h1>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.labelInp}>
                  Nombre:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="username" className={styles.labelInp}>
                  Nombre de usuario:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Nombre de usuario"
                  value={formData.username}
                  onChange={handleChange}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.labelInp}>
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.labelInp}>
                  Contraseña:
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  className={styles.inputField}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={styles.togglePasswordBtn}
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>

              <button type="submit" className={styles.registerButton}>
                Registrarse
              </button>
              {message && <p>{message}</p>}
            </form>
          </>
        )}

        {showLoginButton && (
          <div className={styles.loginFormContainer}>
            <p>¿Ya tienes cuenta?</p>
            <button onClick={showLoginFormView} className={styles.loginButton}>
              Iniciar sesión
            </button>
          </div>
        )}
        {/* ACA EMPIEZA EL FORMULARIO DE LOGUEO  */}
        {showLoginForm && (
          <div className={styles.loginFormContainer}>
            <h1 className={styles.formTitle}>Iniciar sesión</h1>
            <form onSubmit={handleSubmitLogin}>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.labelInp}>
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Nombre de usuario"
                  value={loginFormData.email}
                  onChange={handleChangeLogin}
                  className={styles.inputField}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.labelInp}>
                  Contraseña:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  value={loginFormData.password}
                  onChange={handleChangeLogin}
                  className={styles.inputField}
                />
              </div>
              <button type="submit" className={styles.loginButton}>
              Iniciar sesión
            </button>
              <p>¿No tienes cuenta?</p>
              <button
                onClick={showRegisterFormView}
                className={styles.registerButton}
              >
                Registrarse
              </button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Registro;

// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from "./registro.module.css";

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     username: '',
//     password: ''
//   });
//
//   const [createdUser, setCreatedUser] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3001/users/create', formData);
//       if (!response.data) {
//         throw new Error('Error al registrar usuario');
//       }
//       setMessage('Usuario registrado correctamente');
//       setCreatedUser(response.data); // Guardamos la información del usuario creado
//       console.log('Usuario creado:', response.data); // Mostramos la información en la consola del navegador
//     } catch (error) {
//       setMessage('Error al registrar usuario');
//       console.error(error.message);
//     }
//   };

//   return (
//     <div className={styles.formContainer}>
//       <h2>Registro de usuario</h2>
//       <form onSubmit={handleSubmit}>
//         <div className={styles.formGroup}>
//           <label className={styles.labelInp}>
//             Nombre:
//             <input className={styles.inputField} type="text" name="name" value={formData.name} onChange={handleChange} />
//           </label>
//         </div>
//         <div className={styles.formGroup}>
//           <label className={styles.labelInp}>
//             Nombre de usuario:
//             <input className={styles.inputField} type="text" name="username" value={formData.username} onChange={handleChange} />
//           </label>
//         </div>
//         <div className={styles.formGroup}>
//           <label className={styles.labelInp}>
//             Contraseña:
//             <input className={styles.inputField} type="password" name="password" value={formData.password} onChange={handleChange} />
//           </label>
//         </div>
//         <button className={styles.submitButton} type="submit">Registrarse</button>
//       </form>
//       {message && <p>{message}</p>}
//       {/* Mostrar información del usuario creado */}
//       {createdUser && (
//         <div>
//           <h3>Usuario creado:</h3>
//           <p>ID: {createdUser.id}</p>
//           <p>Nombre: {createdUser.name}</p>
//           <p>Nombre de usuario: {createdUser.username}</p>
//           {/* Agrega más campos según la estructura de tu objeto de usuario */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Register;
