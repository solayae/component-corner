const {Products} = require('../db');
const {articulos} = require('../Utils/Productos');

const bulkProducts = async () => {
  try {
    await Products.bulkCreate(articulos);
    console.log('Database is ready');
  } catch (error) {
    console.log('DB has an error');
  }
};

module.exports = {bulkProducts};
