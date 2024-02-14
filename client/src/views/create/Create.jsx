




// import React, { useState, useRef } from "react";
// import axios from "axios";
// import styles from "./Create.module.css";
// /* import { useAppSelector } from "@/redux/hooks";
// import { useGetUserByIdQuery } from "@/redux/services/usersApi" */


// const PerfilUsuario = () => {

//   const [imageSelect, setImageSelect] = useState(null);

// /*   const localStorageToken = localStorage.getItem("token"); */
// /*   const userD = useAppSelector((state) => state.loginReducer.user); */

// /* 
//   const id = userD?._id;


//  */
// /*   const { data: dataUser } = useGetUserByIdQuery(id);
//   let image = dataUser?.image
//   console.log("supuesta imagen", image); */

//   const [userData, setUserData] = useState({
//     avatar:"",
//     type:"", // Agrega el campo avatar con la URL por defecto
//   });

//   const [showImageUpload, setShowImageUpload] = useState(false);


//   const [editable, setEditable] = useState(false);
//   const firstInputRef = useRef(null);

//   const handleEdit = () => {
//     setShowImageUpload(true);
//     setEditable(true);
//     setTimeout(() => {
//       if (firstInputRef.current) {
//         firstInputRef.current.focus();

//       }
//     }, 0); // El retraso de 0 ms ayuda a que se ejecute en el próximo ciclo de eventos
//   };

//   const handleSave = async (id) => {
//     try {
//       setEditable(false);
     
//       const formData = new FormData();
//       imageSelect && formData.append("photoData", imageSelect);
//       imageSelect.name && formData.append("name", imageSelect.name);

//       const respuesta = await axios.post(
//        `http://localhost:3001/products/create`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log("respuesta", respuesta);
//       console.log("form Data", formData);

//       const imagen = `http://localhost:3001/products/create${respuesta.data.id}`;
//       console.log("imagen id", imagen);
//       setUserData({
//         ...userData,
//         avatar: imagen
//       })
//       if (imagen) {
//         const response = await axios.post(`http://localhost:3001/products/create`, {
//           image: imagen
//         }, {
//           headers: {
//             'Content-Type': 'application/json',
//           }
//         });

//       }
      
//       console.log("esta es la data delusuario ", userData);

//       alert('Cambios guardados correctamente');


      
//     } catch (error) {
//       console.error('Error en la solicitud:', error);
//       if (error.response) {
//         console.error('Respuesta del servidor:', error.response.data);
//       }
//     }
//   };
 
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setUserData((prevUserData) => ({
//       ...prevUserData,
//       [id]: value,
//     }));
//   } ;

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//    /*  const reader = new FileReader();
//     const imageUrl = URL.createObjectURL(file); */
//     console.log("fiele", file);
//     if (file !== null) {
//       const imageUrl = URL.createObjectURL(file);
//       console.log("ten", imageUrl);
//       setUserData({
//         ...userData,
//         avatar: imageUrl
//       })
//       setImageSelect(file)

//     }

//   };




//   return (
//     <div className={styles.formContainer}>
//       <div id="user-form">
//         <div >
//           <img
//             src={userData?.avatar}
//             alt="Avatar"
           
//             onClick={handleEdit}
//           /> {showImageUpload && (
//             <div>
//               <input type="file" accept="image/*" onChange={handleImageChange} />
//               <button onClick={() => setShowImageUpload(false)}>Cancelar</button>
//             </div>
//           )}
//         </div>
//         <div >
//           <label >
//            Type:
//           </label>
//           <input
            
//             type="text"
//             id="type"
//             value={userData.type}
//             onChange={handleChange}
//             disabled={!editable}
//             placeholder="type"
//           />
//         </div>

//         <p className="text-gray-600 text-sm mb-2">
//           ¿Necesitas actualizar tu información? Haz clic en <strong>"Editar"</strong> para empezar.
//         </p>

//         <div className="flex justify-center items-center">

//           <button
//             className="mr-6 bg-red-600 text-white rounded px-2 py-1 hover:bg-red-800 focus:outline-none cursor-pointer w-20 "
//             onClick={handleEdit}
//             disabled={editable}
//           >
//             Editar
//           </button>
//           <button
//             className="bg-teal-500 text-white rounded px-2 py-1 hover:bg-teal-800 focus:outline-none cursor-pointer w-20"
//             onClick={() => handleSave()} disabled={!editable}>
//             Guardar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default PerfilUsuario;


/* 
import React, { useState, useRef } from "react";
import axios from "axios";
import styles from "./Create.module.css";

const CrearProducto = () => {
  const [imageSelect, setImageSelect] = useState(null);
  const [userData, setUserData] = useState({
    avatar: null,
    type: ""
  });
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [editable, setEditable] = useState(false);
  const firstInputRef = useRef(null);

  const handleEdit = () => {
    setShowImageUpload(true);
    setEditable(true);
    setTimeout(() => {
      if (firstInputRef.current) {
        firstInputRef.current.focus();
      }
    }, 0);
  };

  const handleSave = async () => {
    try {
      setEditable(false);
      const formData = new FormData();
      imageSelect && formData.append("image", imageSelect);
      formData.append("type", userData.type);

      const response = await axios.post(
        "http://localhost:3001/products/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      alert("Producto creado correctamente");

      setUserData({
        avatar: null,
        type: ""
      });

      window.location.reload();
    } catch (error) {
      console.error("Error en la solicitud:", error);
      if (error.response) {
        console.error("Respuesta del servidor:", error.response.data);
      }
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [id]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageSelect(file);
      setUserData({
        ...userData,
        avatar: URL.createObjectURL(file)
      });
    }
  };

  return (
    <div >
      <div id="product-form">
        <div>
          <img
            src={userData?.avatar}
            alt="Avatar"
            onClick={handleEdit}
          />
          {showImageUpload && (
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <button onClick={() => setShowImageUpload(false)}>Cancelar</button>
            </div>
          )}
        </div>
        <h1>Mis datos</h1>
        <div>
          <label htmlFor="type">Type:</label>
          <input
            ref={firstInputRef}
            autoFocus={editable}
            type="text"
            id="type"
            value={userData.type}
            onChange={handleChange}
            disabled={!editable}
            placeholder="Type"
          />
        </div>
        <p>¿Necesitas actualizar tu información? Haz clic en <strong>"Editar"</strong> para empezar.</p>
        <div>
          <button onClick={handleEdit} disabled={editable}>Editar</button>
          <button onClick={handleSave} disabled={!editable}>Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default CrearProducto;
 */