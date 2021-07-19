const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51IUCTOBX8H8zwAr88FM1u8GUnfx4ElHunPi59wWc6FgLWwkNTbQN2LESZOBHNXZqmYLhDmM5LaHcWgXvzpm9dBby00pUDSZ1r0"
);

// API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

// Listen command
exports.api = functions.https.onRequest(app);
