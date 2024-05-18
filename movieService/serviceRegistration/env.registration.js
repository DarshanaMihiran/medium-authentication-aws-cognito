const environment = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `./env/env.${environment}` });
