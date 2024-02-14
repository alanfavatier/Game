
const{DataTypes}= require("sequelize")

module.exports = (sequelize)=> {sequelize.define
    ("Celulares",
{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: true
    },  image: {
        type: DataTypes.STRING, // Almacena la URL de la imagen
        allowNull: true
    }


},{timestamps:false} )}

