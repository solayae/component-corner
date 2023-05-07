const { Router } = require('express');
const Express = require('express')
const morgan = require('morgan')
const productsRouter = require('./productsRouter')
const usersRouter = require('./usersRouter')
const authRouter = require('./authRouter')
const usersRedirectRouter = require('./usersRedirectRouter')
const deleteImage  = require('../handler/imageHandler');
const cors = require('cors')
const corsOptions = { origin: 'http://localhost:3000' }
const bodyParser = require('body-parser')
const router = Router()

router.use(Express.json())
//router.use(morgan('dev'))

router.use('/products',productsRouter)
router.use('/users', usersRouter)
router.use('/api/auth',authRouter)
router.use('/api/auth', authRouter )
router.use('/api', usersRedirectRouter)
router.use('/:public_id',deleteImage)



module.exports = router;
