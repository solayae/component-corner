const { Router } = require('express');
const productsRouter = Router();
const { handleProductsAll, handleProductById,handleDeleteById, updateProduct,createProduct } = require('../handler/productsHandler')


productsRouter.get('/', handleProductsAll)
productsRouter.get('/:productsId', handleProductById)
productsRouter.delete('/:productsId', handleDeleteById)
productsRouter.put('/', updateProduct)
productsRouter.post('/',createProduct)

module.exports = productsRouter