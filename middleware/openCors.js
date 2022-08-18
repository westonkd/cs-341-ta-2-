const cors = require("cors");

module.exports = (req, res, next) => {
  const options = {
    // Typically we would only allow the origin
    // of known applications
    origin: "*",
  };

  return cors(options)(req, res, next);
};
