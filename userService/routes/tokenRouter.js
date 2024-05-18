const express = require('express');
const tokenController = require('../controllers/tokenController');
const { validateLoginParameters } = require('../middlewares/inputValidationMiddleware')

const router = express.Router();

router.post('/login', validateLoginParameters, tokenController.login);

router.post('/access', tokenController.accessToken);

module.exports = router;
