require('dotenv').config();
const { Product, Usuario } = require('../db');


const getAllProduct = async () => {
    const dbAllProduct = await Product.findAll({ include: Usuario })
    return dbAllRaza
}
  
const getProductByName = async (name) => {
    const allProduct = await Product.findAll({
      where: {
        name: { [Op.substring]: name }
      },
      include: Usuario 
    }
    )
    return allRazaDB
  }