const express = require("express");
const paymentRoute = require("./paymentRoute");
require("dotenv").config({
  path: `${__dirname}/.env`,
});

const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3001;
// Enable CORS for the frontend
const corsOptions = {
  origin: "http://localhost:5173", // frontend's origin
  credentials: true, // if you need to allow cookies or authentication headers
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/payments", paymentRoute);

app.listen(PORT, () => {
  console.log("API is listening on port", PORT);
});
