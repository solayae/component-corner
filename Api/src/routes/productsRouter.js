const { Router } = require('express');
const productsRouter = Router();
const {
  handleProductsAll,
  handleProductById,
  handleDeleteLogicById,
  updateProduct,
  createProductHandler,
  deleteHandler,
  postComentary
} = require('../handler/productsHandler');

productsRouter.get('/', handleProductsAll);
productsRouter.get('/:productsId', handleProductById);
productsRouter.patch('/', handleDeleteLogicById);
productsRouter.delete('/:id', deleteHandler);
productsRouter.put('/', updateProduct);
productsRouter.post('/', createProductHandler);
//productsRouter.post("/productsId", postComentary)

module.exports = productsRouter;
