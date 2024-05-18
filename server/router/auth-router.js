const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controller');
const singUpSchema = require('../validator/auth-validator');
const validate = require('../middleware/validator-middleware');


router.route("/").get(authControllers.home);
router.route("/register").post(validate(singUpSchema), authControllers.register);
router.route("/login").post(authControllers.login);

module.exports = router;