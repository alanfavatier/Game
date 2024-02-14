const {Sequelize}= require("sequelize")
//sequelize permite crear la interaccion (comunicacion) entre nuestra bdd y javascript

//DEPENDENCIA QUE AYUDA A LEER Las variables de entorno que estan dentro de .env 
require("dotenv").config()

const UsersModel= require("./models/UsersModel")
const CelularesModel= require("./models/CelularesModel")
const TelevisoresModel= require("./models/TelevisoresModel")
const MueblesModel= require("./models/MueblesModel")
const OrdenModel= require("./models/OrdenModel")
const ProductoCarritoModel= require("./models/ProductoCarritoModel")

const {DB_USER,DB_PASSWORD,DB_HOST,DB_NAME} =process.env

//inicializa la conexion del servidor con la bdd 
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`);

//DEFINICION DE MODELOS A USAR
UsersModel(sequelize)
CelularesModel(sequelize)
TelevisoresModel(sequelize)
MueblesModel(sequelize)
OrdenModel(sequelize)
ProductoCarritoModel(sequelize)


//crear las relaciones

const {User, Celulares, Muebles, Orden, ProductoCarrito, Televisores}= sequelize.models;
Televisores.belongsToMany(Orden, { through: ProductoCarrito });
Celulares.belongsToMany(Orden, { through: ProductoCarrito });
Muebles.belongsToMany(Orden, { through: ProductoCarrito });
User.hasMany(Orden);
Orden.belongsTo(User);


//aca puedo tener muchas relaciones , sin limitaciones .

module.exports={
    ...sequelize.models,
    conn: sequelize
}