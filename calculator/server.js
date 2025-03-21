const app = require("./app");
const { PORT } = require("./config/server.js");

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
