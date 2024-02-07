const {Router} = require("express")
const usersRouter = require("./usersRouter")
const postRouter = require("./postsRouter")

const mainRouter= Router()

//en caso de que mi endpoint continue con /users
mainRouter.use("/users", usersRouter)//se lee lo que hay adentro de mi archivo usersRouter.
mainRouter.use("/post", postRouter)

module.exports =mainRouter