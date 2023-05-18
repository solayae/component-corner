const {Products,  Role, Usuario} = require('../db');
const {articulos} = require('../Utils/Productos');
const { roles } = require('../Utils/Roles')
const bcrypt = require("bcryptjs")

const roleAdmin = async ()=>{
  await Usuario.create({
    name: 'admin',
    email: 'corner@component.com',
    password: bcrypt.hashSync('123456789', 12),
    imagen: 'http://res.cloudinary.com/dezvujzed/image/upload/v1684382685/b5rhmlzujmcmcc09npqj.png'
  })
  .then((admin)=>{
    admin.setRoles([2]).then(() => {
      console.log('admin create. ')
  })
  }).catch((error)=>console.log('error admin' + error))
}


const bulkProductsAndRoles = async () => {
  try {
    await Products.bulkCreate(articulos);
    await Role.bulkCreate(roles)
    console.log('Database is ready');
  } catch (error) {
    console.log('DB has an error..');
  }
};

module.exports = {bulkProductsAndRoles, roleAdmin};
