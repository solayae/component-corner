const { verifySignUp } = require('../middleware')
const controller = require('../controllers/authController')
const {Router} = require('express')

module.exports = (app)=>{
    app.use((req, res, next)=>{
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        )
        next()
    })
    app.post('/api/auth/signup', 
        [
            verifySignUp.ckeckDuplicateEmail,
            verifySignUp.checkRolesExisted
        ],

        controller.signup
    )
    app.post('/api/auth/signin', controller.singin)
}

