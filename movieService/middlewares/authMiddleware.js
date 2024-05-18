const jwt = require('jsonwebtoken');
const jwkToPem = require('jwk-to-pem');
const fetch = require('node-fetch');

let pems;

const getPems = async (userPoolId, region) => {
  if (pems) return pems;

  const url = `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`;
  const response = await fetch(url);
  const data = await response.json();
  pems = {};
  data.keys.forEach((key) => {
    pems[key.kid] = jwkToPem(key);
  });

  return pems;
};

const verifyToken = async (token, userPoolId, region) => {
  const decoded = jwt.decode(token, { complete: true });
  if (!decoded) throw new Error('Invalid token');

  const pems = await getPems(userPoolId, region);
  const pem = pems[decoded.header.kid];
  if (!pem) throw new Error('Invalid token');

  return new Promise((resolve, reject) => {
    jwt.verify(token, pem, { algorithms: ['RS256'] }, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });
};

const authorizeRole = (requiredRole) => {
  return async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    try {
      const payload = await verifyToken(token, 'ap-southeast-2_RITtm6OS2', 'ap-southeast-2');
      if (payload['cognito:groups'] && payload['cognito:groups'].includes(requiredRole)) {
        req.user = payload;
        next();
      } else {
        res.status(403).json({ message: 'Forbidden' });
      }
    } catch (err) {

      
      console.log(err);
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
};

module.exports = {
  authorizeRole,
};