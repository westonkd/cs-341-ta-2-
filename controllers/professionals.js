const ProfessionalGenerator = require("../services/professionals/ProfessionalGenerator");

module.exports.show = (_req, res) => {
  const generator = new ProfessionalGenerator();

  res.status(200);
  res.json(generator.generate());
};
