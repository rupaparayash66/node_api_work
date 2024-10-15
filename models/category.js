var mongoose = require('mongoose')

var categorySchema = mongoose.Schema({
    catName: {
        type: String,
        min: 2,
        max: 100,
        required: true,
        unique: [true, "category aleady exist"],

    },

    status: {
        type: String,
        enum: ['Pending', 'Aprrove', 'block'],
        default: 'Pending'
    }

})

module.exports = mongoose.model('category', categorySchema)
