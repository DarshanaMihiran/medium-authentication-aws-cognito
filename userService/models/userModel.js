const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            minLength: 5,
        },
        firstname: {
            type: String,
            required: true,
            minLength: 5,
        },
        lastname: {
            type: String,
            required: true,
            minLength: 5,
        },
        password: {
            type: String,
            required: true,
            minLength: 5,
        },
        roles: {
            type: Array,
            required: true
        },
    }
);

// Query helpers
userSchema.query.byId = function (id) {
    return this.find({ _id: id });
};

userSchema.query.byFirstName = function (firstname) {
    return this.find({ firstname: firstname });
};

//hooks
userSchema.post('save', function (doc, next) {
    console.log('Document saved successfully:', doc);
    next();
});

userSchema.post('remove', function (doc, next) {
    console.log('Document removed successfully:', doc);
    next();
});

userSchema.post('updateOne', function (result, next) {
    console.log('Document updated successfully:', result);
    next();
});

module.exports = mongoose.model('User', userSchema);