const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Venta", {
    
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
        validate: {
         isDate:true
      }
    },
    nroPedido: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    }    
  });
};
