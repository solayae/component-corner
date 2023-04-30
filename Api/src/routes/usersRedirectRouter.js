const { authJwt } = require('../middleware')
const { Router } = require('express')
const { allAccess, adminBoard, moderatorBoard, userBoard } = require('../controllers/panelController')


    const usersRedirectRouter = Router()

    usersRedirectRouter.get('/all', allAccess)
    usersRedirectRouter.get('/user', [authJwt.verifyToken], userBoard)
    usersRedirectRouter.get('/mod', [authJwt.verifyToken, authJwt.isModerator],
    moderatorBoard
    )
    usersRedirectRouter.get('/admin', [authJwt.verifyToken, authJwt.isAdminOrModerator], adminBoard)

    module.exports = usersRedirectRouter