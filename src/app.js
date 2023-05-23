// app.js
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const router = require("./routes/auth.routes");

MONGODB_URI = "mongodb://127.0.0.1:27017/express";
PORT = 3000;

const app = express();

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
