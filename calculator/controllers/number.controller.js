const { getAverage } = require("../services/number.services.js");

const calculateAverage = async (req, res) => {
  try {
    const result = await getAverage(req.params.numberid);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { calculateAverage };
