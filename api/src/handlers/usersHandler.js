
//HANDLERS
//se encarga de recibir la request
//unifiicar datos
// devolver la respuesra
//invoca al controller
//nunca interactua con fuentes externas (api ,bdd)

const { createUserDB, getUserById, getAllUsers, getUserByName } = require("../controllers/usersControllers")

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
const createUserHandler= async (req, res)=>{
    const {name, email, phone,image}= req.body;

    try {
        const response= await createUserDB(name, email,phone,image)
        res.status(200).json(response)
    } catch (error) {       
        res.status(400).json({error: error.message})
    }
}

module.exports= {
    getDetailHandler,
    getUsersHandler,
    createUserHandler,
}