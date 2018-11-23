let mongoose = require('mongoose');

// Setup schema
let UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    }
});

// Export Contact model
let User = module.exports = mongoose.model('user', serieSchema);


module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}
