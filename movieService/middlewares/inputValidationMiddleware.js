function validateIdQuery(req, res, next) {
    const id = req.params.id;
    if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid id parameter' });
    }
    next();
}

function validateGetWithFiltersQuery(req, res, next) {
    // if (!req.query.director || typeof req.query.director !== 'string') {
    //     return res.status(400).json({ error: 'Invalid director query' });
    // }
    next(); // Proceed to the next middleware
}

module.exports = {
    validateIdQuery,
    validateGetWithFiltersQuery
};