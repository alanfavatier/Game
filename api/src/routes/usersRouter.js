const {Router} = require("express")

const {getDetailHandler, getUsersHandler,createUserHandler} = require("../handlers/usersHandler")

const usersRouter= Router()

//hasta aca llega en caso de que mi endpoint tenga /users y se ejecuta lo que contenga la req dependiendo el endpoin que yo intente acceder.

//CONTROLLER ES UNA OTRA FUNCION

usersRouter.get("/", getUsersHandler)
usersRouter.get("/:id",getDetailHandler )
usersRouter.post("/", createUserHandler)





module.exports= usersRouter;