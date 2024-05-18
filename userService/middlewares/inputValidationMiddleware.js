function validateIdQuery(req, res, next) {
    const id = req.params.id;
    if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid id parameter' });
    }
    next();
}

function validateLoginParameters(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);
    if (!username || !password) {
        return res.status(403).json({ error: 'Invalid Credentials' });
    }
    next();
}

module.exports = {
    validateIdQuery,
    validateLoginParameters
};