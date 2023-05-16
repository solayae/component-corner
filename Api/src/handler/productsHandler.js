//const { articulos } = require('../Utils/Productos')
const { Comentario } = require("../db");
const {
  getProductByName,
  getAllProducts,
  getProductFiltered,
  getProductByBrand,
  productById,
  deleteLogicProduct,
  createProduct,
  deleteProduct,
  updateProducts,
  createComentary
} = require('../controllers/productsControllers');
const { Op } = require('sequelize');

// trae los productos por nombre o categoria en caso de recibir uno, sino trae todos los productos
const handleProductsAll = async (req, res) => {
  const { name, brand, category } = req.query;
  try {
    if (name) {
      const productsByName = await getProductByName(name);
      productsByName.length
        ? res.status(200).json(productsByName)
        : res.status(400).json({ message: `No se encontro ${name}` });
    } else if (category && brand) {
      const productsByBrandCategory = await getProductFiltered(category, brand);
      productsByBrandCategory.length
        ? res.status(200).json(productsByBrandCategory)
        : res
            .status(400)
            .json({
              message: `No se encontro ${category} de la marca ${brand}`,
            });
    } else if (category) {
      const productsByCategory = await getProductFiltered(category);
      productsByCategory.length
        ? res.status(200).json(productsByCategory)
        : res
            .status(400)
            .json({ message: `No se encontro productos de ${category}` });
    } else if (brand) {
      const productByBrand = await getProductByBrand(brand);
      productByBrand.length
        ? res.status(200).json(productByBrand)
        : res
            .status(400)
            .json({ message: `No se encontro producto de la marca ${brand}` });
    } else {
      const allProducts = await getAllProducts();
      res.status(200).json(allProducts);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// trae un producto por id de la base de datos
const handleProductById = async (req, res) => {
  const { productsId } = req.params;
  try {
    const product = await productById(productsId);
    if (product) return res.status(200).json(product);
    else res.status(400).json(`No se encontro producto con id ${productsId}`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//deshabilita o habilita un producto para el borrado logico
const handleDeleteLogicById = async (req, res) => {
  const { productsId } = req.body;
  console.log('ruta de patch');
  try {
    const updateProduct = await deleteLogicProduct(productsId);
    updateProduct.delete
      ? res.status(201).json('El producto se ha deshabilitado')
      : res.status(201).json('El producto se ha habilitado con éxito!');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//borra un producto de la base de datos
const deleteHandler = async (req, res) => {
  const { id } = req.params;
  const validUuid =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
  try {
    if (!validUuid.test(id) || !id) {
      return res.status(400).json(`El id ${id} no es un UUID válido`);
    } else {
      await deleteProduct(id);
      return res
        .status(200)
        .json({ message: 'El producto se ha eliminado satisfactoriamente' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//modifica el valor de las propiedades de un producto
const updateProduct = async (req, res) => {
  const { id, image, name, brand, detail, price, category, stock } = req.body;
  try {
    if (!id) return res.status(400).json({ message: 'Falta el ID' });

    const updateProduct = await updateProducts(
      image,
      name,
      brand,
      detail,
      price,
      category,
      stock,
      id
    );

    return updateProduct[0] > 0
      ? res.status(200).json({ message: 'El producto se actualizo con éxito!' })
      : res.status(400).json({ message: 'El producto no se actualizo' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//crea un nuevo producto en la base de datos, si no lo encuentra
const createProductHandler = async (req, res) => {
  const propNecesarias = [
    'image',
    'name',
    'brand',
    'detail',
    'price',
    'category',
    'stock',
  ];
  const propFaltantes = [];
  propNecesarias.forEach((prop) => {
    if (!req.body[prop]) {
      propFaltantes.push(prop);
    }
  });
  if (propFaltantes.length > 0) {
    const faltantes = `Campos faltantes: ${propFaltantes.join(', ')}`;
    res.status(400).json({ error: faltantes });
  } else {
    const { image, name, brand, detail, price, category, stock } = req.body;
    try {
      const [newProduct, created] = await createProduct(
        image,
        name,
        brand,
        detail,
        price,
        category,
        stock
      );
      created
        ? res.status(200).json(`El producto ${name} se ha creado exitosamente`)
        : res.status(200).json(`El producto ${name} ya existe`);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

const postComentary = async (req, res) => {
  //const {productsId} = req.params
  console.log('get comentario')
  // const {comentario, UsuarioId, ProductsId} = req.body
  // try {
   
  //     const comentarioCreado = await createComentary(comentario, ProductsId, UsuarioId)

  //     comentarioCreado
  //     ? res.status(200).json(comentarioCreado) 
  //     :  res.status(400).json({ message: 'No se pudo crear el comentario' });
    
  //      res.status(200).json(comentarioCreado)
    
  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }
}

const getComentaryHandler = async (req, res) => {
  console.log("get comentario")
 res.status(200).send("qloq")
}

module.exports = {
  handleProductsAll,
  handleProductById,
  deleteHandler,
  handleDeleteLogicById,
  updateProduct,
  createProductHandler,
  postComentary,
  getComentaryHandler
};
