const express = require("express");
const paymentRoute = require("./paymentRoute");
require("dotenv").config({
  path: `${__dirname}/.env`,
});
const cors = require("cors");

const app = express();

app.use(cors());
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/payments", paymentRoute);

app.listen(PORT, () => {
  console.log("API is listening on port", PORT);
});
