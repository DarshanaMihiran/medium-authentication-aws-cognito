const express = require('express');
const movieController = require('../controllers/movieController');
const { validateIdQuery, validateGetWithFiltersQuery } = require('../middlewares/inputValidationMiddleware');
const { verifyToken, authorizeRoles } = require('../middlewares/TokenVerificationMiddleware');

const router = express.Router();

// Define routes and use controller methods
/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Get all movies with filters, sort and pagination
 *     tags: [Movies]
 *     parameters:
 *       - in: query
 *         name: filter
 *         schema:
 *           type: string
 *         description: Filter criteria (e.g., genre=Action)
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: Field to sort by (e.g., release_date)
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *         description: Sort order (asc or desc)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: A list of movies
 */
router.get('/', verifyToken, authorizeRoles('admin', 'executive'), movieController.get);

/**
 * @swagger
 * /api/movies/{id}:
 *   get:
 *     summary: Get a movie by ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the movie to get
 *     responses:
 *       200:
 *         description: A movie
 *       404:
 *         description: Movie not found
 */
router.get('/:id', validateIdQuery, movieController.getById);

/**
 * @swagger
 * /api/movies/create:
 *   post:
 *     summary: Create a new movie
 *     tags: 
 *       - Movies
 *     parameters:
 *       - in: "body"
 *         name: "body"
 *         description: "Movie object that needs to be added"
 *         required: true
 *     responses:
 *       201:
 *         description: Movie created successfully
 *       400:
 *         description: Bad request, invalid input
 *       500:
 *         description: Internal server error
 */
router.post('/create', movieController.create);



module.exports = router;
