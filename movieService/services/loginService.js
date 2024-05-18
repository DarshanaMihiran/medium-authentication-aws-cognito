const generateSecretHash = require('../utils/cryptoGenerator');
const { CognitoIdentityServiceProvider } = require('aws-sdk');
const environment = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `./env/env.${environment}` });

class LoginService {
  
    async signin(username, password) {   
        const cognito = new CognitoIdentityServiceProvider({
            region: process.env.AWS_REGION,
        });

        const secretHash = generateSecretHash(username, process.env.CLIENT_ID, process.env.CLIENT_SECRET);

        const result = await cognito.initiateAuth({
            AuthFlow: process.env.AUTH_FLOW,
            AuthParameters: {
                USERNAME: username,
                PASSWORD: password,
                SECRET_HASH: secretHash,
            },
            ClientId: process.env.CLIENT_ID,
        }).promise();
        return result;
    }
}

module.exports = new LoginService();