const userService = require('../services/userService');

class TokenController {
    async login(req, res, next) {
        try {
            const { username, password } = req.body;
            const token = await userService.login(username, password);
            res.status(200).json(token);
        } catch (error) {
            next(error);
        }
    }

    async accessToken(req, res, next) {
        try {
            const { refreshToken } = req.body;
            const token = await userService.token(refreshToken);
            res.status(200).json(token);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new TokenController();