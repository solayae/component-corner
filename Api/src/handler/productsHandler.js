const {articulos} = require('../Utils/Productos')
//const {motherboards, monitores} = require('../../dbProducts')
const { Op } = require("sequelize");
const { Products } = require("../db");

async function addProduct() {
 /*  const addProduct = await Products.create({
    image:
      "https://img.pccomponentes.com/articles/1059/10594876/1607-asus-rog-strix-b650e-f-gaming-wifi.jpg",
    price: 217,
    brand: "Asus",
    name: "MOTHER ASUS (AM5) ROG STRIX B650E-E GAMING WFI",
    detail: [
      "AMD Socket AM5 for AMD Ryzen 7000 Series Desktop Processors",
      "Total supports 4 x M.2 slots and 4 x SATA 6Gb/s ports",
      "ROG SupremeFX 7.1 Surround Sound High Definition Audio CODEC ALC4080",
      "4x DIMM Slots, DDR5 6400MHz, PCIe Gen 5, 4x SATA 6Gb/s connectors, 4xM.2 Slot, 2.5GB LAN",
      "Graphics: 1 x DisplayPort* 1 x HDMI® port",
      "Expansion Slots AMD Ryzen™ 7000 Series Desktop Processors*",
    ],
    category: "Motherboard",
    stock: 0,
    delete: false,
  }); */
  const addArticulos = await Products.bulkCreate(articulos)
  
  return addArticulos
}
async function product() {
  const newProduct = await addProduct();
  
}


// trae todos los productos de la base de datos
const handleProductsAll = async (req, res) => {
  const { name } = req.query;
  if (!name) {
    // trae todos los productos
    addProduct()
    const allProduct = await Products.findAll();
    res.status(200).json(allProduct);
  } else {
    // trae los productos que coincidan con el nombre
    const allProduct = await Products.findAll({
      where: {
        name: { [Op.substring]: name },
      },
    });
    res.status(200).json(allProduct);
  }
};

// trae un producto por id de la base de datos
const handleProductById = async (req, res) => {
  const { productsId } = req.params;

  console.log(productsId)
  try {
    
    const oneProduct = await Products.findByPk(productsId)    
    if (!oneProduct) return res.status(400).json({error: error.message})
    res.status(200).json(oneProduct)
  } catch (error) {
    res.status(400).json({ error: error.message });
    
  }
};



const handleDeleteById = async (req, res) => {
  const { productsId } = req.params
  console.log('ruta de put')
  try {
   
    const updateProduct= await Products.update({ delete: true }, {
      where: {
        id: productsId
      }
    })
    return updateProduct[0]>0 ?  res.status(200).json({message: 'El producto se elimino con éxito!'}) : res.status(400).json({message: 'no se elimino ningun producto'})
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const updateProduct = async (req, res) => {
  const { id, image, name, brand, detail, price, category, stock } = req.body
  try {
    if (!id) return res.status(400).json({ error: 'falta el ID' })
    const updateProduct = await Products.update({
      image,
      name,
      brand,
      detail,
      price,
      category,
      stock,
    }, {
      where: {
        id: id
      }
    })
    
    return updateProduct[0]>0 ?  res.status(200).json({message: 'El producto se actualizo con éxito!'}) : res.status(400).json({message: 'El producto no se actualizo'})
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

/* 
where: { name: 'Goku' },
3 defaults: {
4
gender: 'M',
5
race: 'Saiyan'
6 }
*/

const createProduct = async (req, res) => {
  const { image, name, brand, detail, price, category, stock } = req.body
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
        stock
      }
    })

  
    if (!create) return res.status(200).json({ message: `el producto ya existe` })
    return res.status(201).json({message: `el producto ${name} ha sido creado con éxito`})
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


module.exports = {
  handleProductsAll,
  handleProductById,
  handleDeleteById,
  updateProduct,
  createProduct
};
