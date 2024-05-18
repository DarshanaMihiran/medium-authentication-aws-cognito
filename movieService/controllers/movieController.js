const movieService = require('../services/movieService');

class MovieController {
    async get(req, res, next) {
        try {
            const { filter, sort, order, page, limit } = req.query;
            const movies = await movieService.get(filter, sort, order, page, limit);
            res.status(200).json({ movies });
        } catch (error) {
            next(error);
        }
    };

    async getById(req, res, next) {
        try{
            console.log('hi');
            const id = req.params.id;
            console.log(id);
            const movies = await movieService.getById(id);
            return res.status(200).json(movies);
        }
        catch(error){
            next(error);
        }       
    }

    async create(req, res, next) {
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