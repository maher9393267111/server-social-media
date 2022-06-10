// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { verify } = require("jsonwebtoken");
const firebase = require("./firebase/admin");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const cors = require("cors");

const express = require("express");
const app = express();
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(cors());
const router = require("express").Router();

const register = router.get("/reg", (req, res) => {
  
    res.status(200).json({ message: "hello maher here" });
});

app.use("/user", register);

//PORT

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
