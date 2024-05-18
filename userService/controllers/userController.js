const userService = require('../services/userService');

class UserController {
    async get(req, res, next) {
        try {
            const { filter, sort, order, page, limit } = req.query;
            const users = await userService.get(filter, sort, order, page, limit);
            res.status(200).json({ users });
        } catch (error) {
            next(error);
        }
    };

    async getById(req, res, next) {
        try{
            console.log('hi');
            const id = req.params.id;
            console.log(id);
            const user = await userService.getById(id);
            return res.status(200).json(user);
        }
        catch(error){
            next(error);
        }       
    }

    async create(req, res, next) {
        try {
            const { username, firstname, lastname, password } = req.body;
            const createdUser = await userService.createUser(username, firstname, lastname, password);
            res.status(201).json(createdUser);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();