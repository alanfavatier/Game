const{DataTypes}= require("sequelize")

module.exports = (sequelize)=> {sequelize.define
    ("User",
 {
    id:{
        type:DataTypes.UUID ,//tipo de dato id unico 
        primaryKey: true,
        defaultValue:DataTypes.UUIDV4///genera un id unico 
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    phone:{
        type:DataTypes.INTEGER,
       
    },
    image:{
        type: DataTypes.STRING,
        allowNull:false

    },
    created: {
        type: DataTypes.BOOLEAN,
        defaultValue:true,
    },

},{timestamps:false} )}