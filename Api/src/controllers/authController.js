const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Role, Usuario } = require("../db");
const confing = require("../config/authConfig");
const { Op } = require("sequelize");
const rolDefault = 1;
const nodemailer = require("nodemailer");

async function mailer(email) {
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
    subject: "Successfully Registered",
    text: "Welcome to Component Corner",
    html: "<b>Welcome to Component Corner, Thanks foy choosing us!</b>",
  });

  console.log("Message sent: %s" + info.messageId);
}

exports.signup = (req, res) => {
  Usuario.create({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 12),
    imagen:'https://res.cloudinary.com/dezvujzed/image/upload/v1684256560/avatar7_ku0xuz.png'
    
  })
    .then((usuario) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          usuario.setRoles(roles).then(() => {
            res.send({ message: "¡Registro exitoso!" });
            mailer(req.body.email).catch(console.error);
          });
        });
      } else {
        usuario.setRoles([1]).then(() => {
          res.send({ message: "¡Registro exitoso!" });
          mailer(req.body.email).catch(console.error);
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  Usuario.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((usuario) => {
      if (!usuario) {
        return res.status(404).send({ message: " :Usuario no existe" });
      }
      const passwordValidate = bcrypt.compareSync(
        req.body.password,
        usuario.password
      );
      if (!passwordValidate) {
        return res.status(401).send({
          accessToken: null,
          message: " :La contraseña no es invalida",
        });
      }

      const token = jwt.sign({ id: usuario.id }, confing.secret, {
        expiresIn: 86400,
      });
      const authorities = [];
      usuario.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("Role" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: usuario.id,
          name: usuario.name,
          roles: authorities,
          accessToken: token,
          email:usuario.email,
          imagen:usuario?.imagen,
          direction:usuario?.direction
        });
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
