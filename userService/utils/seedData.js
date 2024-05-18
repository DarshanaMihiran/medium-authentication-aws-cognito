const { connectDatabase } = require('../config/database.config');
const User = require('../models/userModel');
const {users} = require('./users.json');
const bcrypt = require('bcrypt');

const environment = process.env.NODE_ENV || 'dev';
require('dotenv').config({ path: `./env/env.${environment}` });

async function insertInitialData() {
    try {
        // Connect to the database
        await connectDatabase(process.env.DB_URL, JSON.parse(process.env.DB_OPTIONS));
        const count = await User.countDocuments();

        if (count === 0) {
            for (let user of users) {
                user.password = await bcrypt.hash(user.password, 10);
            }
            console.log(users);
            await User.insertMany(users);
            console.log('Initial data inserted successfully');
        }      
    } catch (error) {
        console.error('Error inserting initial data:', error);
        process.exit(1);
    }
}

module.exports = { insertInitialData };
