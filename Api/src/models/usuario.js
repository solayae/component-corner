const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Usuario", {
    
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
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
      
    },
    favorite: {
      type: DataTypes.TEXT,
      
    },
    direction: {
      type: DataTypes.TEXT,
      
    },
    cart: {
      type: DataTypes.TEXT,
      allowNull:true
    }


  });
};
