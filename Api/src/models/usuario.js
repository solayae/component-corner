const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Usuario", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        isEmail: true, 
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8,12],
      }
    },
    favorite: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    direction: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    cart: {
      type: DataTypes.TEXT,
      allowNull:true
    }

  });
};
