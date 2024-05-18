const crypto = require('crypto');

const generateSecretHash = (username, clientId, clientSecret) => {
    const hash = crypto
        .createHmac('SHA256', clientSecret)
        .update(username + clientId)
        .digest('base64');
    return hash;
};

module.exports = generateSecretHash;