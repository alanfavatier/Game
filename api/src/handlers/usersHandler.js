
//HANDLERS
//se encarga de recibir la request
//unifiicar datos
// devolver la respuesra
//invoca al controller
//nunca interactua con fuentes externas (api ,bdd)

const { createUserDB, getUserById, getAllUsers, getUserByName } = require("../controllers/usersControllers")
const jwt = require("jsonwebtoken");
require("dotenv").config();
//query => 
const getUsersHandler= async (req, res)=>{
    const {name ,race} =req.query
    try {
       if(name){
        const userByName= await getUserByName(name)//si recibo un nombre hago la busqueda y me devuelve dicho nombre
        res.status(200).json(userByName)
       }else{
        const response = await getAllUsers()// si no me devuelve todos los nombres

           res.status(200).json(response)
       }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
   
}

// /:id => params 
const getDetailHandler= async (req, res)=>{
    //para recibir datos por params debo hacer una destructuracion 
    const {id}=req.params;
// si es nan es de la bdd sinno de la api
    const source = isNaN(id) ? "bdd" : "api"
    try {
        const response= await getUserById({ id, source })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
   
}
// body => info
//este handler va a invocar a mi controlador de creacion con los datos que recibo de body
async function createUserHandler(req, res) {
    const { name, username, password, email } = req.body;
  
    try {
      const user = await createUserDB(name, username, password, email);
      const token = generateAuthToken(user.id); // Generar token de autenticación
      res.status(201).json({ user, token }); // Devolver usuario y token al cliente
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  function generateAuthToken(userId) {
    const payload = {
      userId: userId,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
    return token;
  }
  
module.exports= {
    getDetailHandler,
    getUsersHandler,
    createUserHandler,
    
}