const express = require('express');
const movieController = require('../controllers/movieController');
const { validateIdQuery, validateGetWithFiltersQuery } = require('../middlewares/inputValidationMiddleware');
const { authorizeRole } = require('../middlewares/authMiddleware');
const jwt = require('jsonwebtoken');
const AWS = require('aws-sdk');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const crypto = require('crypto');
const { CognitoIdentityServiceProvider } = require('aws-sdk');

const router = express.Router();

router.post('/signin', async (req, res) => {
  const { username, password, newPassword, email } = req.body;
  try {
      const result = await login(username, password);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});

const AWS_REGION = 'ap-southeast-2';

const cognito = new CognitoIdentityServiceProvider({
    region: AWS_REGION
  });

const poolData = {
    UserPoolId: 'ap-southeast-2_RITtm6OS2',
    ClientId: '7m7ujqi6hdcoab0l2vbdp4rgec',
    ClientSecret:  '1aumcot82j7hk9nog431vqro1475mfu9k33u62qpoqrti1nijuh2'
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const generateSecretHash = (username, clientId, clientSecret) => {
    const hash = crypto
        .createHmac('SHA256', clientSecret)
        .update(username + clientId)
        .digest('base64');
    console.log(`Generated secret hash: ${hash}`); // Debugging log
    return hash;
};

router.post('/signin', async (req, res) => {
    const { username, password, newPassword, email } = req.body;
    try {
        const result = await login(username, password);
        res.status(200).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
});

function login(username, password) {
    const secretHash = generateSecretHash(username, poolData.ClientId, poolData.ClientSecret);
  
    return cognito.initiateAuth({
      AuthFlow: 'USER_PASSWORD_AUTH',
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
        SECRET_HASH: secretHash,
      },
      ClientId: poolData.ClientId,
    }).promise();
  }


module.exports = router;
