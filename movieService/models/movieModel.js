const mongoose = require('mongoose');
const {Schema} = mongoose;

const validateGreaterThanZero = {
	validator: v => v > 0,
	message: props => `${props.value} should be greater than 0`,
};

const validateLesserThanTen = {
	validator: v => v < 10,
	message: props => `${props.value} should be greater than 10`,
};

const validateYear = {
	validator: v => v <= new Date().getFullYear(),
	message: props => `${props.value} should be equal or less than ${new Date().getFullYear()}`,
};

const scoreSchema = new Schema(
    {
        IMDb: {
            type: Number,
            validate: validateGreaterThanZero,
        }, 
        Metacritic: {
            type: Number,
            validate: validateGreaterThanZero,
		}, 
        RottenTomatoes: {
            type: Number,
            validate: validateGreaterThanZero,
        },
    }
);

const movieSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            minLength: 5,
        },
        year: {
			type: Number,
			min: 1900,
			validate: validateYear,
		},
        genre: Array,
        director: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            validate: [validateGreaterThanZero, validateLesserThanTen]
        },
        createdAt: {
			type: Date,
			immutable: true,
			default: Date.now,
		},
        updatedAt: {
			type: Date,
			immutable: true,
			default: Date.now,
		},
        similarBestMovie: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: "Movie",
		},
        scores: scoreSchema,
        mainActors: [String],
    }
);

//virtual feilds
movieSchema.virtual("ratedTitle").get(function() {
	return `[${this.rating}/10] <${this.title}>`
})

// Query helpers
movieSchema.query.byId = function (id) {
    return this.find({ _id: id });
};

movieSchema.query.byTitle = function (title) {
    return this.find({ title: title });
};

//hooks
movieSchema.post('save', function (doc, next) {
    console.log('Document saved successfully:', doc);
    next();
});

movieSchema.post('remove', function (doc, next) {
    console.log('Document removed successfully:', doc);
    next();
});

movieSchema.post('updateOne', function (result, next) {
    console.log('Document updated successfully:', result);
    next();
});

module.exports = mongoose.model('Movie', movieSchema);