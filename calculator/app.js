const express = require("express");
const numberRoutes = require("./routes/number.routes.js");

const app = express();
app.use("/numbers", numberRoutes);

module.exports = app;
