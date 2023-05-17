const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
      allowNull: false,
      validate: {
        len: [5, 38]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favorite: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    direction: {
      type: DataTypes.TEXT,
    },
    banned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    cart: {
      type: DataTypes.TEXT,
<<<<<<< HEAD
      allowNull: true,
    },
   
=======
      allowNull: true
    },
>>>>>>> 0efd9c9d13e43eaaeb202f010e96dfaa7801c9a9
    imagen: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  Usuario.addHook('beforeCreate', (user, options) => {
    if (!user.favorite) {
      user.favorite = [];
    }
  });

  return Usuario;
};
