const axios = require("axios");
const { API_URLS, WINDOW_SIZE } = require("../config/server.js");

let storedNumbers = [];

const fetchNumbers = async (type) => {
  try {
    const response = await axios.get(API_URLS[type], { timeout: 500 });
    return response.data.numbers || [];
  } catch (error) {
    console.error(`Error fetching ${type} numbers:`, error.message);
    return [];
  }
};

const storeNumbers = (newNumbers) => {
  const prevState = [...storedNumbers];

  newNumbers.forEach((num) => {
    if (!storedNumbers.includes(num)) {
      storedNumbers.push(num);
    }
  });

  if (storedNumbers.length > WINDOW_SIZE) {
    storedNumbers = storedNumbers.slice(-WINDOW_SIZE);
  }

  return { prevState, storedNumbers, newNumbers };
};

const calculateAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  return (numbers.reduce((sum, num) => sum + num, 0) / numbers.length).toFixed(2);
};

const getAverage = async (type) => {
  const newNumbers = await fetchNumbers(type);
  const result = storeNumbers(newNumbers);

  return {
    windowPrevState: result.prevState,
    windowCurrState: result.storedNumbers,
    numbers: result.newNumbers,
    avg: calculateAverage(result.storedNumbers),
  };
};

module.exports = { getAverage };
