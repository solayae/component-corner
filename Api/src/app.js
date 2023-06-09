const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const cors = require("cors");
const mercadopago = require("mercadopago");
require("dotenv").config();

require("./db.js");

const server = express();
server.use(cors());

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY });
server.post("/payment", (req, res) => {
  const cart = req.body;
  let preference = {
    items: [
      {
        // id: cart.id,
        title: "Component Corner",
        currency_id: "ARS",
        // picture_url: prod.image,
        description: "Test",
        category_id: "art",
        quantity: 1,
        unit_price: cart.reduce(
          (totalPrice, item) => (totalPrice += item.quantity * item.price),
          0
        ),
      },
    ],
    back_urls: {
      success: "http://localhost:3001", //"http://localhost:3001", //"https://component-corner.vercel.app", //cambiar url deploy
      failure: "",
      pending: "",
    },
    auto_return: "approved",
    binary_mode: true,
  };
  mercadopago.preferences
    .create(preference)
    .then((response) => res.status(200).send({ response }))
    .catch((error) => res.status(400).send({ error: error.message }));
});

server.use("/", routes);

server.get("/payment/history", async (req, res) => {
  try {
    // Hacer modelo para almacenar pagos en la DB
    const paymentHistory = await Payment.find({ userId: req.user.id });

    res.json({ paymentHistory });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching payment history" });
  }
});

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
