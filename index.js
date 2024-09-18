const express = require("express");
const paymentRoute = require("./paymentRoute");
require("dotenv").config({
  path: `${__dirname}/.env`,
});
const cors = require("cors");
const corsOrigin = {
  origin: "http://localhost:5173", //or whatever port  frontend is using
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();

const PORT = process.env.PORT || 3001;
app.use(cors(corsOrigin));

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/payments", paymentRoute);

app.listen(PORT, () => {
  console.log("API is listening on port", PORT);
});
