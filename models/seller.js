var mongoose = require('mongoose')

var sellerSchema = mongoose.Schema({

    username: {
        type: String,
        required: true,
        min: 3,
        max: 50,
        unique: [true]
    },

    email: {
        type: String,
        min: 10,
        max: 100,
        required: true,
        unique: [true, "email aleady exist"]
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

    birthdate: {
        type: Date,
        default: Date.now()
    },

    aadharcardnumber: {
        type: Number,
        min: 12,
        require: true,
        unique: [true, "aadhar number already exist"]
    },

    pancardnumber: {
        type: String,
        min: 10,
        require: true,
        unique: [true, "pannumber already exist"]
    },

    gstnumber: {
        type: String,
        min: 15,
        require: true,
        unique: [true, "gstnumber already exist"]
    },

    address: {
        type: String,
        min: 20,
        max: 300,
        require: true,
    },

    city: {
        type: String,
        min: 4,
        max: 50,
        require: true,
    },

    district: {
        type: String,
        min: 4,
        max: 50,
        require: true,
    },

    state: {
        type: String,
        min: 4,
        max: 50,
        require: true,
    },

    pincode: {
        type: Number,
        min: 6,
        require: true,
    },

})

module.exports = mongoose.model('seller', sellerSchema)
