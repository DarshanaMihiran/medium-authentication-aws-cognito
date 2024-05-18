const express = require('express');
const movieController = require('../controllers/movieController');
const { validateIdQuery, validateGetWithFiltersQuery } = require('../middlewares/inputValidationMiddleware');
const { authorizeRole } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authorizeRole('Admin'), movieController.get);

router.get('/:id', validateIdQuery, movieController.getById);

router.post('/create', movieController.create);

module.exports = router;
