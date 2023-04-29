const { Products } = require("../db");
const { articulos } = require("../Utils/Productos");
const { Op } = require("sequelize")

async function addProduct() {
  const existingProducts = await Products.findAll();
  const newProducts = articulos.filter((product) => {
    return !existingProducts.some((existingProduct) => existingProduct.name === product.name);
  });

  const createdProducts = await Products.bulkCreate(newProducts);
}
//invoca la funcion para agregar articulos que no hayan sido agregados y retorna todos los productos
const getAllProducts = async () => {
  await addProduct()
  const allProducts = await Products.findAll()

  return allProducts
}

const getProductByName = async (name) => {
  const allProduct = await Products.findAll({
    where: {
      name:{
                [Op.iLike]:`%${name}%`
            }
    },
  });
  return allProduct;
};

const productById =  async (productsId) => {
  const product = await Products.findByPk(productsId)

  return product
}

async function deleteLogicProduct(productsId) {
  const product = await Products.findByPk(productsId);
  const updatedProduct = await product.update({
    delete: !product.delete
  });
  return updatedProduct;
}

const deleteProduct = async (id) => {
  await Products.destroy({where: {id}})
}

async function updateProducts(image, name, brand, detail, price, category, stock, id) {
    const updatePropertys = {};

    if (image !== undefined && image !== null) {
      updatePropertys.image = image;
    }
    if (name !== undefined && name !== null) {
      updatePropertys.name = name;
    }
    if (brand !== undefined && brand !== null) {
      updatePropertys.brand = brand;
    }
    if (detail !== undefined && detail !== null) {
      updatePropertys.detail = detail;
    }
    if (price !== undefined && price !== null) {
      updatePropertys.price = price;
    }
    if (category !== undefined && category !== null) {
      updatePropertys.category = category;
    }
    if (stock !== undefined && stock !== null) {
      updatePropertys.stock = stock;
    }

  const updateProduct = await Products.update(updatePropertys,
      {
        where: {
          id: id,
        },
      }
  );
  return updateProduct
}

const createProduct = async(image, name, brand, detail, price, category, stock) => {
  const [newProduct, created] = await Products.findOrCreate({
    where: {
      name: name,
    },
      defaults: {
      image,
      name,
      brand,
      detail,
      price,
      category,
      stock,
    },
  })  
return [newProduct, created]
}

module.exports = {
  addProduct,
  getProductByName,
  deleteLogicProduct,
  updateProducts,
  getAllProducts,
  productById,
  deleteProduct,
  createProduct
};
