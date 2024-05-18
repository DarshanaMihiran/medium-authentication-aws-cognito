const { connectDatabase } = require('../config/database.config');
const Movie = require('../models/movieModel');
const {movies} = require('./movies.json');

const environment = process.env.NODE_ENV || 'dev';
require('dotenv').config({ path: `./env/env.${environment}` });

async function insertInitialData() {
    try {
        // Connect to the database
        await connectDatabase(process.env.DB_URL, JSON.parse(process.env.DB_OPTIONS));
        const count = await Movie.countDocuments();

        if (count === 0) {
            console.log(movies);
            await Movie.insertMany(movies);
            console.log('Initial data inserted successfully');
        }      
    } catch (error) {
        console.error('Error inserting initial data:', error);
        process.exit(1);
    }
}

module.exports = { insertInitialData };
