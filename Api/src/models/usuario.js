const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Usuario', {
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
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favorite: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    direction: {
      type: DataTypes.TEXT,
    },
    cart: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
};
