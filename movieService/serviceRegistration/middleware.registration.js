const express = require('express');
const errorHandler = require('../middlewares/exceptionMiddleware'); 
const bodyParser = require('body-parser');

const configureMiddleware = (app) => {
    app.use(express.json());
    app.use(errorHandler);
    app.use(bodyParser.json());
};

module.exports = configureMiddleware;
