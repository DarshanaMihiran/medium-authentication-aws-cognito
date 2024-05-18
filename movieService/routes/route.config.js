const express = require('express');
const router = express.Router();
const movieRouter = require('./movieRouter');

// Define your routes here
router.use('/api/movies', movieRouter);

module.exports = router;