const express = require("express");
const router = express.Router();
require("dotenv").config({
  path: `${__dirname}/.env`,
});

const stripe = require("stripe")(process.env.SECRET_KEY);
console.log(process.env.SECRET_KEY);

router.post("/intents", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount, // Integer in pence
      currency: "gbp",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.json({ paymentIntent: paymentIntent.client_secret });
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});

module.exports = router;
