const { verifySignUp } = require('../middleware')
const controller = require('../controllers/authController')
const {Router} = require('express')




const authRouter = Router()

authRouter.post('/signin',controller.signin)

authRouter.post('/signup', verifySignUp.ckeckDuplicateEmail, controller.signup)

module.exports = authRouter