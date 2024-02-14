/* const {User , Post}= require("../db")
const {infoCleaner}= require("../utils/index")

const axios = require("axios")

//esta parte del codigo se maneja de manera asyncrona xq se tiene que resolver la promesa de newUser
const createUserDB= async (name, descripcion, precio,image)=>{

    return await User.create({name, descripcion, precio,image})


};

const getUserById = async({id,source})=>{
    const user = source === "api" ? (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data 
    : await User.findByPk(id,{
            include:{
                model:Post,
                attributes:["title", "image_id"]//esto es para que cuando traigamos el usuario por id , lo busca dentro de la bdd y nos devuelva el modelo post con los atributos title y body.
            }
        }) //el metodo find busca en la base de datos con la primary key
    return user;
}
   
 


const getAllUsers =async()=>{
    const usersDB = await User.findAll() //dentro de la tabla de usuario se ejecuta el metodo findAll que me trae todos los usuarios(esto es para la bdd)
    
    const infoApi= (await axios.get(`https://jsonplaceholder.typicode.com/users`)).data //trae los usuarios de la api

    //aca utilizo la funcion purificadora para limpiar la info api
    const usersApi = infoCleaner(infoApi)

    return [...usersDB, usersApi]  // esto lo que hace es unificar los datos que vienen de la bdd y de la api para devolverlos todos juntos 
                   

}



const getUserByName = async(name)=>{

    const infoApi= (await axios.get(`https://jsonplaceholder.typicode.com/users`)).data //trae los usuarios de la api

    //aca utilizo la funcion purificadora para limpiar la info api
    const usersApi = infoCleaner(infoApi)
    //filer me devuelve un nuevo array , es decir que modifica a usersApi que va a excluir a todos los elementos que no cumplan la condicion que paso como callback. la condicion es que el a valor de user.name coincida con el name que estoy recibiendo por parametro. (ESTO ES PARA LA API)

    const userFiltered = usersApi.filter(user=> user.name === name)

    //para buscar por nombre en la base de datos usamos el metodo findAll agregandole where para definir que atributo quiero filtrar

    const userDB = await User.findAll({where: {name: name}});
// unifico los datos y los devuelvo
    return [...userFiltered, ...userDB]


}

module.exports= {
    createUserDB,
    getUserById, 
    getAllUsers,
    getUserByName
} */

// En un archivo llamado usersController.js
const { User } = require("../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();



async function createUserDB(name, username, password,email) {
  try {
    const token = generateAuthToken(); // Genera el token de autenticación
    const newUser = await User.create({ name, username, password, token,email });
    return newUser;
  } catch (error) {
    throw new Error(error.message);
  }
}

function generateAuthToken() {
  const payload = {
   
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  return token;
}

async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createUserDB,
  getUserById,
  getAllUsers,
};
