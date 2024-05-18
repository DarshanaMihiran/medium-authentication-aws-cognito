const express = require('express');
const router = express.Router();
const movieRouter = require('./movieRouter');
const loginRouter = require('./loginRouter');

// Define your routes here
router.use('/api/movies', movieRouter);
router.use('/api/login', loginRouter);

module.exports = router;