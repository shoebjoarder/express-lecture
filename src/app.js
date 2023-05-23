// app.js
const express = require("express");

const router = require("./routes/auth.routes");

PORT = 3000;

const app = express();

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
