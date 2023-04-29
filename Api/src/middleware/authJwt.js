const jwt = require('jsonwebtoken')
const config = requiere('../config/authConfig') 
const { Usuario } = require('../db')
const ADMIN = 'admin'
const MODERATOR = 'moderator'



verifyToken = (req, res, next)=>{
    const token = req.headers['x-access-token']
    
    if(!token){
        return res.status(403).send({
            message:'¡No se proporciona token!'
        })
    }

    jwt.verify(token, config.secret, (err, decoded)=>{
        if(err){
            return res.status(401).send({
                message:'¡No autorizado!'
            })
        }
        req.id = decoded.id
        next()
    })


    isAdmin = (req, res, next)=>{
        Usuario.findByPk(req.id)
        .then(user=>{
            user.getRoles()
            .then(roles=>{
                for(let i = 0; i < roles.length; i++){
                    if(roles[i].name === ADMIN){
                        next()
                        return
                    }
                }
            })
        })    
    }

    isModerator = (req, res, next)=>{
        Usuario.findByPk(req.id)
        .then(user=>{
            user.getRoles()
            .then(roles=>{
                for(let i = 0; i < roles.length; i++){
                    if(roles[i].name === MODERATOR){
                        next()
                        return
                    }    
                }
            })
        })
    }


   isAdminOrModerator = (req, res, next)=>{
        Usuario.findByPk(req.id)
        .then(user=>{
            user.getRoles()
            .then(roles=>{
                if(roles[i].name === MODERATOR){
                    next()
                    return
                }

                if(roles[i].name === ADMIN){
                    next()
                    return 
                }

                res.status(403).send({
                    message: 'require admistrador o moderador'
                })

            })
        })
   } 

}


const authJwt = {
    verifyToken : verifyToken,
    isAdmin: isAdmin,
    isModerator: isModerator,
    isModeratorOrAdmin: isModeratorOrAdmin
}

module.exports = authJwt