require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 9876,
  WINDOW_SIZE: 10,
  API_URLS: {
    p: "http://20.244.56.144/test/primes",
    f: "http://20.244.56.144/test/fibo",
    e: "http://20.244.56.144/test/even",
    r: "http://20.244.56.144/test/rand",
  },
};
