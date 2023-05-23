const User = require("../models/user.model");

exports.login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    let user = await User.findOne({ username: username });
    if (!user) {
      return res.status(400).render("greeting", { error: "User not found" });
    }
    if (password !== user.password) {
      return res
        .status(400)
        .render("greeting", { error: "Invalid credentials" });
    }
    res.status(200).render("greeting", {
      username: username,
      message: "You are now logged in!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal server error" });
  }
};

exports.signup = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    let user = await User.findOne({ username: username });
    if (user) {
      return res
        .status(400)
        .render("greeting", { error: "User already exists!" });
    }

    let newUser = new User({
      username: username,
      password: password,
    });

    await newUser.save();

    res.status(200).render("greeting", {
      username: username,
      message: "You are now registered!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Internal server error" });
  }
};
