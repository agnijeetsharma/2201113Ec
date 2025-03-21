const express = require("express");
const numberRoutes = require("./routes/number.routes.js");

const app = express();
app.use("/", numberRoutes);

module.exports = app;
