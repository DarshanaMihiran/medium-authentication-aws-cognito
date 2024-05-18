const userRepo = require('../repos/userRepo');

class userService {
    async get(filter, sort, order, page, limit) {
        return await userRepo.get(filter, sort, order, page, limit);
    }
   
    async getById(id) {
        return await userRepo.getById(id);
    }

    async createUser(username, firstname, lastname, password) {
        const createdUser = await userRepo.create({
            username, firstname, lastname, password
        });
        return createdUser;
    }

    async login(username, password) {
        const token = await userRepo.login({
            username, password
        });
        return token;
    }

    async token(refreshToken) {
        const tokens = await userRepo.token(refreshToken);
            console.log(tokens);
            return tokens;
    }
}

module.exports = new userService();