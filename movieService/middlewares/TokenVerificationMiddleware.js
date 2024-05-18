const jwt = require('jsonwebtoken');
const environment = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `./env/env.${environment}` });

function verifyToken(request, response, next) {
    console.log('Hi1');
    const authzHeader = request.headers['authorization']
    const accessToken = authzHeader && authzHeader.split(' ')[1]
    if (accessToken == null) {
        console.log('Hi2');
        return response.status(401).send();
    } else {
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
            if (error) {
                if (error.name === 'TokenExpiredError') {
                    return response.status(401).json({ message: 'Access Token Expired' });
                }
                return response.status(403).json({ message: 'Forbidden: Invalid Token' });
            } else {
                request.user = user
                next()
            }
        })
    }
}

function authorizeRoles(...roles) {
    return (request, response, next) => {
        if (!request.user || !request.user.roles) {
            return response.status(403).json({ message: 'Forbidden: No roles found' });
        }

        const userRoles = request.user.roles;
        const hasRole = roles.some(role => userRoles.includes(role));

        if (!hasRole) {
            return response.status(403).json({ message: 'Forbidden: Insufficient role' });
        }

        next();
    };
}

module.exports = { verifyToken, authorizeRoles };
