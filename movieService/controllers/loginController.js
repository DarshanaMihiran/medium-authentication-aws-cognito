const loginService = require('../services/loginService');

class LoginController {
    async signin(req, res, next) {
        try {
            const { username, password} = req.body;
            const result = await loginService.signin(username, password);
            // console.log(result);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new LoginController();