const movieService = require('../services/movieService');

class loginController {
    async signin(req, res, next) {
        try {
            const { title, year, genre, director, rating, similarBestMovie, scores, mainActors} = req.body;
            console.log(title);
            const createdMovie = await movieService.createMovie(title, year, genre, director, rating, similarBestMovie, scores, mainActors);
            res.status(201).json(createdMovie);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new MovieController();