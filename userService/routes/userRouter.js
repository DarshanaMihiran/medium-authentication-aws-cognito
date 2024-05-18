const express = require('express');
const userController = require('../controllers/userController');
const { validateIdQuery } = require('../middlewares/inputValidationMiddleware');

const router = express.Router();

router.get('/', userController.get);

router.get('/:id', validateIdQuery, userController.getById);

router.post('/create', userController.create);

module.exports = router;
