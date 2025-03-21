const express = require('express');
const { getNumbers } = require('../controllers/number.controller.js');

const router = express.Router();
router.get('/:numberid', getNumbers);

module.exports = router;