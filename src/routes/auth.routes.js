// auth.routes.js
const express = require("express");
const router = express.Router();

const controller = require("../controllers/auth.controller");

const verify = require("../middlewares/verify");

router.post("/login", verify.isValidUsername, controller.login);

module.exports = router;
