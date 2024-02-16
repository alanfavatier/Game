const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Muebles",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING, // Campo para almacenar la imagen
        allowNull: true,
      },
      category: {
        type: DataTypes.STRING, // Aquí defines el campo de categoría
        allowNull: false, // Ajusta esto según tus necesidades
      }
    },
    { timestamps: false }
  );
};
