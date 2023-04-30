const {Products,  Role} = require('../db');
const {articulos} = require('../Utils/Productos');
const { roles } = require('../Utils/Roles')

const bulkProductsAndRoles = async () => {
  try {
    await Products.bulkCreate(articulos);
    await Role.bulkCreate(roles)
    console.log('Database is ready');
  } catch (error) {
    console.log('DB has an error');
  }
};

module.exports = {bulkProductsAndRoles};
