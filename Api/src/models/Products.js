const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Products = sequelize.define('Products',{
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      reviews: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        defaultValue: [],
      },
      delete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );
  // Products.addHook('beforeCreate', (product, options) => {
  //   if (!product.reviews) {
  //     product.reviews = [];
  //   }
  // });

  return Products
};
