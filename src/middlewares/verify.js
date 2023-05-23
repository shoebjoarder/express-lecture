// verify.js
const validateUsername = (username) => {
  const min = 3;
  const max = 25;
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-zA-Z]{2,})$/;

  if (emailRegex.test(username)) {
    return `Username cannot be an email address`;
  }

  if (username.length < min) {
    return `Username too short, must be at least ${min} characters`;
  }

  if (username.length > max) {
    return `Username too long, must be at most ${max} characters`;
  }

  if (!usernameRegex.test(username)) {
    return "Username can only contain alphanumeric characters and underscores";
  }

  return null;
};

exports.isValidUsername = (req, res, next) => {
  const username = req.body.username;
  const errorMessage = validateUsername(username);

  if (errorMessage) {
    return res.status(401).json({ error: errorMessage });
  }

  next();
};
