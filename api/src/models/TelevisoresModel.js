const{DataTypes}= require("sequelize")

module.exports = (sequelize)=> {sequelize.define
    ("Televisores",
{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
   
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },image: {
        type: DataTypes.BLOB, // Campo para almacenar la imagen
        allowNull: true
    }

},{timestamps:false} )}