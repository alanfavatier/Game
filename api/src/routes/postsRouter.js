
const {Router} = require("express")

const postRouter= Router()

const { createPostHandler }=  require("../handlers/postHandlers");

postRouter.post("/",createPostHandler)

module.exports= postRouter;