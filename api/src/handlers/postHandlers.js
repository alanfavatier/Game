const {createPostDB} = require("../controllers/postControllers")

const createPostHandler =  async (req, res)=>{
    const {title, body, userId} = req.body
    try {
        const newPost= await createPostDB(title, body, userId)
        //se la devulevo al front asi: 
        res.status(200).json(newPost)
    } catch (error) {
        res.status(400).json({error: error.messsage})
    }
}

module.exports= {
    createPostHandler
}