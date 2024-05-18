const express = require('express');
const { connectDatabase } = require('./config/database.config');
const configureMiddleware = require('./serviceRegistration/middleware.registration');
require('./serviceRegistration/env.registration');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger.config');
const { insertInitialData } = require('./utils/seedData')
const routes = require('./routes/route.config')
require('./serviceRegistration/env.registration');

const app = express();
const port = process.env.PORT || 3000;

// Configure Middleware
configureMiddleware(app);

// Configure Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Configure routes
app.use(routes);

// Start server and connect to database
connectDatabase(process.env.DB_URL, JSON.parse(process.env.DB_OPTIONS))
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

        insertInitialData();
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });
