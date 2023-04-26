const { Router } = require('express');
const Express = require('express')
const morgan = require('morgan')
const productsRouter = require('./productsRouter')
const usersRouter = require('./usersRouter')
const router = Router()

router.use(Express.json())
router.use(morgan('dev'))

router.use('/products',productsRouter)
router.use('/users', usersRouter)
module.exports = router;
