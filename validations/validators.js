const { body } = require("express-validator");

exports.hasRule = body("rule")
  .isJSON()
  .withMessage("rule is required.");

exports.hasData = body("data")
  .isJSON()
  .withMessage("data is required.");
