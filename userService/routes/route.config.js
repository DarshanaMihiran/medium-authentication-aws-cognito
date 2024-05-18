const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter');
const tokenRouter = require('./tokenRouter');

// Define your routes here
router.use('/api/users', userRouter);
router.use('/api/token', tokenRouter);

module.exports = router;