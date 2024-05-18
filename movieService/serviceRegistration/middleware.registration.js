const express = require('express');
const errorHandler = require('../middlewares/exceptionMiddleware'); 

const configureMiddleware = (app) => {
    app.use(express.json());
    app.use(errorHandler);
};

module.exports = configureMiddleware;
