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
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/payments", paymentRoute);

app.listen(PORT, () => {
  console.log("API is listening on port", PORT);
});
