const nodemailer = require("nodemailer");
const { Usuario } = require("../db");
const { userEmail } = require("../handler/usersHandler");

// async function mailer() {
//   if (userdata.type === "register") {
//     let transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: "componentcorner@gmail.com",
//         pass: "qutywcvnzokrijtn",
//       },
//     });

//     let info = await transporter.sendMail({
//       from: '"💻Component Corner💻" <componentcorner@gmail.com>',
//       to: `${userdata.email}`,
//       subject: `Welcome to Component Corner`,
//       text: "Your user is successfully created!",
//       html: "<b>Successfully Registered</b>",
//     });

//     console.log("Message sent: %s", info.messageId);
//   }

//   if (userdata.type === "order") {
//     let transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: "componentcorner@gmail.com",
//         pass: "qutywcvnzokrijtn",
//       },
//     });

//     let info = await transporter.sendMail({
//       from: '"💻Component Corner💻" <componentcorner@gmail.com>',
//       to: `${userdata.email}`,
//       subject: "New Purchase!",
//       text: `Successfully purchase of ${product.name}`,
//       html: "<b>Successfully Purchased</b>",
//     });

//     console.log("Message sent: %s", info.messageId);
//   }
// }

// mailer().catch(console.error);

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "componentcorner@gmail.com",
//     pass: "qutywcvnzokrijtn",
//   },
// });

// transporter.verify().then(() => {
//   console.log("Ready for send emails");
// });

// module.exports = { transporter };

async function mailer() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "componentcorner@gmail.com", // generated ethereal user
      pass: "qutywcvnzokrijtn", // generated ethereal password
    },
  });

  console.log(userEmail);

  let info = await transporter.sendMail({
    from: '"💻Component Corner💻" <componentcorner@gmail.com>', // sender address
    to: userEmail, // list of receivers
    subject: "Register", // Subject line
    text: "Test", // plain text body
    html: "<b>Test</b>", // html body
  });

  console.log("Message sent: %s" + info.messageId);
}

module.exports = { mailer };
