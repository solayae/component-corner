const { Products } = require("../db");
const { articulos } = require("../Utils/Productos");

const getProductByName = async (name) => {
  const allProduct = await Products.findAll({
    where: {
      name: { [Op.substring]: name },
    },
  });
  return allProduct;
};

async function addProduct() {
  const addArticulos = await Products.bulkCreate(articulos);
  return addArticulos;
}

async function deleteProduct(productsId) {
 const updateProduct= await Products.update({ delete: true }, {
      where: {
        id: productsId
      }
 })
  return updateProduct
}

async function updateProducts(image, name, brand, detail, price, category, stock, id) {
  const updateProduct = await Products.update(
      {
        image,
        name,
        brand,
        detail,
        price,
        category,
        stock,
      },
      {
        where: {
          id: id,
        },
      }
  );
  return updateProduct
}
module.exports = {
  addProduct,
  getProductByName,
  deleteProduct,
  updateProducts
};
