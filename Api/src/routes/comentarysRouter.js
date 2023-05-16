const { Router } = require('express');
const { getComentaryHandler, postComentary } = require('../handler/productsHandler')

const comentaryRouter = Router();

comentaryRouter.get('/', getComentaryHandler);
comentaryRouter.post('/', postComentary);


module.exports = comentaryRouter;