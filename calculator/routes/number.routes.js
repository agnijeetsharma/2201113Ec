const express = require("express");
const router = express.Router();
const { calculateAverage } = require("../controllers/number.controller.js");

router.get("/numbers/:numberid", calculateAverage);

module.exports = router;
