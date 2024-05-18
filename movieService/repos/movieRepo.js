const Movie = require('../models/movieModel');
const {DatabaseException,NotFoundException} = require('../utils/customErrors');

class MovieRepo {
    async getById(id) {
        const movie = await Movie.find({_id : id}).populate("similarBestMovie");
        if(!movie) throw new NotFoundException("Movie");
        return movie;
    }

    async getAllMovies(query) {
        const movies = await Movie.find(query).populate("similarBestMovie");
        if(!movies) throw new NotFoundException("Movie");
        return movies;
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
            const movies = await Movie.find(query)
                .sort(sortQuery)
                .skip((page - 1) * limit)
                .limit(limit);
            if(!movies) throw new NotFoundException("Movie");
            return movies;
        } catch (error) {
            throw new DatabaseException(`Error retrieving movies: ${error.message}}`);
        }
    }

    async create(movieData) {
        try {
            const movie = new Movie(movieData);
            await movie.save();
            return movie;
        } catch (error) {
            throw new DatabaseException(`Error creating movie: ${error.message}`);
        }
    }
}

module.exports = new MovieRepo();