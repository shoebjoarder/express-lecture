// auth.routes.js
const express = require("express");
const router = express.Router();

const controller = require("../controllers/auth.controller");

const verify = require("../middlewares/verify");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/login", verify.isValidUsername, controller.login);

module.exports = router;