const { DataTypes} = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Products", {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
    },
     image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: true,
    },
     detail: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
    }, 
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique:true
    },
    stock: {
      type: DataTypes.INTEGER
    },
    delete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }, 
    
  }, {
    timestamps: false
  });
};
