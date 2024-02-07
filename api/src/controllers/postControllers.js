//necesito traerme la tabla de post , el modelo, para poder crear un post dentro
const {Post}= require("../db")

const createPostDB= async(body,title, userId)=>{

    const post= await Post.create({body,title})

    //para la asosiacion se utiliza el metodo set. 
    //aca le decimos que al post le setee el usuario (setUser) set es el metodo y User es el modelo. De esta manera se asocia el post con el usuario.
    await post.setUser(userId)
    return post

}

module.exports={
    createPostDB
}