const{DataTypes}= require("sequelize")

module.exports = (sequelize)=> {sequelize.define
    ("Post",
 {
    id:{
        type:DataTypes.UUID ,//tipo de dato id unico 
        primaryKey: true,
        defaultValue:DataTypes.UUIDV4///genera un id unico 
    },
    title:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    body:{
        type:DataTypes.STRING,
        allowNull:false,
    },

},{timestamps:false} )}