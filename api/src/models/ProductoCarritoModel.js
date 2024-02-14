const{DataTypes}= require("sequelize")

module.exports = (sequelize)=> {sequelize.define
    ("ProductoCarrito",
{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1 // Por defecto, un artículo se añadirá con una cantidad de 1
    },

 

},{timestamps:false} )}




