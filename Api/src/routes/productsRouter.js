const { Router } = require('express');
const productsRouter = Router();
const {
  handleProductsAll,
  handleProductById,
  handleDeleteById,
  updateProduct,
  createProduct,
  bulkProducts,
} = require('../handler/productsHandler');

productsRouter.get('/', handleProductsAll);
productsRouter.get('/:productsId', handleProductById);
productsRouter.delete('/:productsId', handleDeleteById);
productsRouter.put('/', updateProduct);
productsRouter.post('/', createProduct);
productsRouter.post('/bulk', bulkProducts);

module.exports = productsRouter;
