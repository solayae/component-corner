 const { Usuario, Role } = requere('../db.js')

 ckeckDuplicateEmail = (req, res, next)=>{
    Usuario.findOne({
        where: {
            email : req.body.email
        }
    })
    .then(user=>{
        if(user){
            res.status(400).send({
                message : '¡Fallido! ¡Correo electrónico ya está en uso!'
            })
            return
        }
        next()
    })
 }

 checkRolesExisted = (req, res, next)=>{
    if(req.body.roles){
        for( let i = 0; i < req.body.roles.length; i++ ){
         if(!Role.includes(req.body.roles[i])){
            res.stutus(400).send({
                 message : 'Rol no existe'
            })
            return 
         }
        }
    }
    next()
 }

 const verifySignUp = {
    checkRolesExisted : checkRolesExisted,
    ckeckDuplicateEmail: ckeckDuplicateEmail
 }

 module.exports = verifySignUp