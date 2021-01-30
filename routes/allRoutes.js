const express = require('express');
const postController = require('../controllers/allControllers');
const { hasRule } = require('../validations/validators');
const { hasData } = require('../validations/validators');
const router = express.Router();

router.get("/", postController.index);
router.post("/validate-rule",  hasRule, hasData, postController.store);

module.exports = router;