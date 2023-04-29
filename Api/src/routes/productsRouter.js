const { Router } = require('express');
const productsRouter = Router();
const { handleProductsAll, handleProductById,handleDeleteLogicById, updateProduct,createProductHandler,deleteHandler } = require('../handler/productsHandler')


productsRouter.get('/', handleProductsAll)
productsRouter.get('/:productsId', handleProductById)
productsRouter.patch('/', handleDeleteLogicById)
productsRouter.delete('/:id', deleteHandler)
productsRouter.put('/', updateProduct)
productsRouter.post('/',createProductHandler)

module.exports = productsRouter