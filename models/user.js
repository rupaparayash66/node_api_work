var mongoose = require('mongoose')

var userSchema = mongoose.Schema({

    username: {
        type: String,
        required: true,
        min: 3,
        max: 50,
        unique: [true]
    },

    email: {
        type: String,
        min : 10,
        max: 100,
        required: true,
        unique: [true ,  "email aleady exist"]
    },

    password: {
        type: String,
        required: true,
        min: 8,
        max: 30,
        unique: [true, "new password enter"]
    },

    mobilenumber: {
        type: Number,
        require: true,
        min: 10
    },
})

module.exports = mongoose.model('user', userSchema)