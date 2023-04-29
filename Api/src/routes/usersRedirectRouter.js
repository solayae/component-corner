const { authJwt } = require('../middleware')
const { allAccess, adminBoard, moderatorBoard, userBoard } = require('../controllers/panelController')

module.exports = (app)=>{
    app.use((req, res, next)=>{
        res.header(
            'Access-Control-All-Headers',
            'x-access-token, Origin, Context-Type, Accept'
        )
        next()
    })
    
    app.get('/api/test/all', allAccess)
    app.get('/api/test/user', [authJwt.verifyToken], userBoard)
    app.get('/api/test/mod', [authJwt.verifyToken, authJwt.isModerator],
    moderatorBoard
    )
    app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isModeratorOrAdmin], adminBoard)
}