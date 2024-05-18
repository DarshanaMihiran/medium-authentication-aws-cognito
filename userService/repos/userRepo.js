const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const environment = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `./env/env.${environment}` });
const {
    NotFoundException,
    InvalidCredentialsException,
    DatabaseException
} = require('../utils/customErrors');

class userRepo {
    async getById(id) {
        const user =  await User.find({_id : id});
        if (!user) throw new UserNotFoundException('User');
        return user;
    }

    async getAllUsers(query) {
        const users = await Movie.find(query);
        if (!users) throw new UserNotFoundException('User');
        return users;
    }

    async get(filters, sort, order, page, limit) {
        const query = {};

        // Apply filters
        if (filters) {
            const filterArray = filters.split('&');
            filterArray.forEach(filter => {
                const [key, value] = filter.split('=');
                query[key] = value;
            });
        }

        // Apply sorting
        let sortQuery = {};
        if (sort) {
            sortQuery[sort] = order === 'desc' ? -1 : 1;
        }

        try {
            const users = await User.find(query)
                .sort(sortQuery)
                .skip((page - 1) * limit)
                .limit(limit);
            return users;
        } catch (error) {
            throw new DatabaseException(`Failed to fetch users: ${error.message}`);
        }
    }

    async create(userData) {
        try {
            const hashedPwd = await bcrypt.hash(userData.password, 10);
            const user = new User(userData);
            user.password = hashedPwd;
            console.log(user);
            await user.save();
            return user;
        } catch (error) {
            throw new DatabaseException(`Error creating user: ${error.message}`);
        }
    }

    async login(loginData) {
        try {
            const user = await User.findOne({username: loginData.username});
            if (!user) throw new NotFoundException("User");

            const isPasswordValid = await bcrypt.compare(loginData.password, user.password);
            if (!isPasswordValid) throw new InvalidCredentialsException("Invalid credentials");
            
            const uid = loginData.username;
            const jwtUser = {uid: uid, roles: user.roles};
            const accessToken = this.mintAccessToken(jwtUser);
            const refreshToken = this.mintRefreshToken ((jwtUser));
            //insert refresh token to the database
            return {accessToken: accessToken, refreshToken: refreshToken};
        } catch (error) {
            throw new DatabaseException(`Error logging in: ${error.message}`);
        }
    }

    async token(refreshToken){
        if (!refreshToken) throw new InvalidCredentialsException('No refresh token provided');
        // check database has the refresh token
        // if (!refreshTokens.includes(refreshToken)) {
        //     return response.sendStatus(403);
        // }
        const verifyToken = (token, secret) => {
            return new Promise((resolve, reject) => {
                jwt.verify(token, secret, (error, user) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(user);
                    }
                });
            });
        };

        try {
            const user = await verifyToken(refreshToken, process.env.REFRESH_TOKEN_SECRET);
            const accessToken = this.mintAccessToken({ uid: user.uid, roles: user.roles});
            console.log(accessToken);
            return accessToken;
        } catch (error) {
            throw new InvalidCredentialsException('Forbidden');
        }
    }

    mintAccessToken(jwtUser){
        const accessToken = jwt.sign(jwtUser, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10s'});
        return accessToken;
    }

    mintRefreshToken(jwtUser){
        // Manage expiration manually by logout from the application
        const accessToken = jwt.sign(jwtUser, process.env.REFRESH_TOKEN_SECRET);
        return accessToken;
    }
}

module.exports = new userRepo();