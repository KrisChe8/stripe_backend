const express = require("express");
const paymentRoute = require("./paymentRoute");
require("dotenv").config({
  path: `${__dirname}/.env`,
});

const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3002;
// Enable CORS for the frontend
const corsOptions = {
  origin: "http://localhost:5173", // frontend's origin
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true, // if you need to allow cookies or authentication headers
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());
app.options("/payments/intents", cors(corsOptions));

app.get("/api/payments/intents", (req, res) => {
  res.send(
    "This is the payments intents route. Please use POST requests for creating intents."
  );
});

app.use("/api/payments", paymentRoute);

app.listen(PORT, () => {
  console.log("API is listening on port", PORT);
});
