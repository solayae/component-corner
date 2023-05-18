const { Usuario } = require("../db") 
const jwt = require("jsonwebtoken");
const config = require("../config/authConfig")
const nodemailer = require("nodemailer")
const {Router} = require("express")
const forgotPassword = async   (req, res)=>{

const email = req.body.email
const url = 'http://localhost:3001/'
async function mailer(email, url , token) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "componentcorner@gmail.com",
        pass: "qutywcvnzokrijtn",
      },
    });

    let info = await transporter.sendMail({
        from: '"💻Component Corner💻" <componentcorner@gmail.com>',
        to: email,
        subject: "Reset de contraseña",
        
        html: `<b>Por favor ingresa al siguiente link para resetear tu contraseña</b>
                ${url}/${token}`,
      });

}
      

Usuario.findOne({
    where: {
        email: email
    }
})
    .then((usuario) => {
        if(!usuario){
            return res.status(404).send({
                message : 'Usuario no existe'
            })
        }

        const  token = jwt.sign({
            id: usuario.id
        }, config.resetPassword,
        {expiresIn: '15m'}
        
        )

       const tokeUpdate =  Usuario.update({
            resetLink : token
        },{
            where: email
        })

        if(tokeUpdate){
            mailer(email, url , token)
        }



    })



 


}

const routerReset  = Router()

routerReset.post('/reset',forgotPassword )


exports.module = routerReset