var mongoose = require('mongoose')

var subcategorySchema = mongoose.Schema({

    subcatname: {
        type: String,
        min: 2,
        max: 100,
        required: true,
        unique: [true],

    },

    status: {
        type: String,
        enum: ['Pending', 'Aprrove', 'block'],
        default: 'Pending'
    }

})

module.exports = mongoose.model('subcategory', subcategorySchema)
