function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500;
        console.error(err.message, err.stack);
        res.status(statusCode).json({'message': err.message, errorEnum: err.enumCode});
}

module.exports = errorHandler;