var mongoose = require('mongoose')

var adminschema = mongoose.Schema({

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
})



module.exports = mongoose.model('admin' ,adminschema)
