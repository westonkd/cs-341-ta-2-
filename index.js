const express = require("express");
const config = require("./config/app");

const app = express();

// Routes
const professionals = require("./routes/professionals");
app.use("/professional", professionals(express.Router()));

app.listen(config.port, () => {
  console.log(`Application running on port ${config.port}`);
});
