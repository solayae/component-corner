//const { articulos } = require('../Utils/Productos')
const {
  addProduct,
  getProductByName,
  deleteProduct,
  updateProducts
} = require("../controllers/productsControllers");
const { Op } = require("sequelize");
const { Products } = require("../db");

// trae todos los productos de la base de datos
const handleProductsAll = async (req, res) => {
  const { name } = req.query;
  if (!name) {
    // trae todos los productos
    let allProduct = await Products.findAll();
    if (allProduct.length === 0) {
      addProduct();
      res.status(200).json(allProduct);
    } else {
      res.status(200).json(allProduct);
    }
    
  } else {
    // trae los productos que coincidan con el nombre
    const allProductByName = await getProductByName(name);

    res.status(200).json(allProductByName);
  }
};

//Trae los productos del archivo y los carga a la base de datos
const bulkProducts = async(req, res) => {
  try{
    addProduct()
    res.status(200).json({message:"The database has been bulked and updated"})
  }catch(error){
    res.status(400).json({error:error.message})
  }
}

// trae un producto por id de la base de datos
const handleProductById = async (req, res) => {
  const { productsId } = req.params;
  try {
    const oneProduct = await Products.findByPk(productsId);
    if (!oneProduct) return res.status(400).json({ error: error.message });
    res.status(200).json(oneProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleDeleteById = async (req, res) => {
  const { productsId } = req.params;
  console.log("ruta de put");
  try {
    const updateProduct = deleteProduct(productsId);
    return updateProduct[0] > 0
      ? res.status(200).json({ message: "El producto se elimino con éxito!" })
      : res.status(400).json({ message: "no se elimino ningun producto" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id, image, name, brand, detail, price, category, stock } = req.body;
  try {
    if (!id) return res.status(400).json({ error: "falta el ID" });
    const updateProduct = updateProducts(image, name, brand, detail, price, category, stock, id)
    

    return updateProduct[0] > 0
      ? res.status(200).json({ message: "El producto se actualizo con éxito!" })
      : res.status(400).json({ message: "El producto no se actualizo" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const createProduct = async (req, res) => {
  const { image, name, brand, detail, price, category, stock } = req.body;
  try {
    const [newProduct, create] = await Products.findOrCreate({
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
    });

    if (!create)
      return res.status(200).json({ message: `el producto ya existe` });
    return res
      .status(201)
      .json({ message: `el producto ${name} ha sido creado con éxito` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handleProductsAll,
  handleProductById,
  handleDeleteById,
  updateProduct,
  createProduct,
  bulkProducts
};
