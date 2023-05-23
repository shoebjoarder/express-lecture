exports.login = (req, res) => {
  const username = req.body.username;
  res.status(200).render("greeting", {
    username: username,
    message: "You are now logged in!",
  });
};
