const mongoose = require('mongoose');

function connectDatabase(dbURL, dbOptions) {
    return mongoose.connect(dbURL, dbOptions);
}

module.exports = { connectDatabase };