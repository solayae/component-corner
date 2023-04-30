const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { Role, Usuario } = require('../db')
const confing = require('../config/authConfig')
const { Op } = require('sequelize')
const rolDefault = 1

exports.signup = (req, res) =>{
    Usuario.create({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 12)
    })
    .then(usuario =>{
       if(req.body.roles){
        Role.findAll({
            where: {
                name: {
                    [Op.or] : req.body.roles
                }
            }
        })
        .then(roles=>{
            usuario.setRoles(roles).then(()=>{
                res.send({message: '¡Usuario registrado con exito!'})
            })
        })
       } else {
        usuario.setRoles([1])
          .then(()=>{
            res.send({message:'¡Usuario resgistrado con exito!'})
          })
       }
    })
    .catch(err=>{
        res.status(500).send({message:err.message})
    })
    
}


exports.signin = (req, res)=>{
    Usuario.findOne({
        where:{
            email:req.body.email
        }
    })
    .then(usuario=>{
        if(!usuario){
            return res.status(404).send({message:'usuario no exite'})
        }
        const passwordValidate = bcrypt.compareSync(
            req.body.password,
            usuario.password
        )
        if(!passwordValidate){
            return res.status(401).send({
                accessToken:null,
                message:'password es invalido'
            })
        }

        const token = jwt.sign({id:usuario.id}, confing.secret, {
            expiresIn:86400
        })
        const authorities = []
        usuario.getRoles()
            .then(roles=>{
                for(let i = 0; i < roles.length; i++){
                    authorities.push('Role' + roles[i].name.toUpperCase())
                }
            res.status(200).send({
                id : usuario.id,
                name: usuario.name,
                roles:authorities,
                accessToke:token
            })
            
            })
            
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message })
    })
}


