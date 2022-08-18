const jsonResponse = require("../middleware/jsonResponse");
const openCors = require("../middleware/openCors");
const { show } = require("../controllers/professionals");

const professionals = (router) => {
  router.use([jsonResponse, openCors]);

  router.use("/", show);

  return router;
};

module.exports = professionals;
