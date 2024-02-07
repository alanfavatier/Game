const {Sequelize}= require("sequelize")
//sequelize permite crear la interaccion (comunicacion) entre nuestra bdd y javascript

//DEPENDENCIA QUE AYUDA A LEER Las variables de entorno que estan dentro de .env 
require("dotenv").config()

const UsersModel= require("./models/UsersModel")
const PostsModel= require("./models/PostsModel")

const {DB_USER,DB_PASSWORD,DB_HOST,DB_NAME} =process.env

//inicializa la conexion del servidor con la bdd 
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`);

//DEFINICION DE MODELOS A USAR
UsersModel(sequelize)
PostsModel(sequelize)

//crear las relaciones

const {User, Post}= sequelize.models;

//aca puedo tener muchas relaciones , sin limitaciones .

User.hasMany(Post)//un usuario puede tener muchos post.
Post.belongsTo(User)//un post pertnece a un solo  usuario.

module.exports={
    ...sequelize.models,
    conn: sequelize
}