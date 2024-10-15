const { type } = require('express/lib/response')
var mongoose = require('mongoose')
const category = require('./category')

var orderSchema = mongoose.Schema({

    name: {
        type: String,
        min: 2,
        max: 20,
        required: [true]
    },

    categoryname: {
        type: String,
        min: 2,
        max: 100,
        required: true,
        unique: [true]
    },

    price: {
        type: String,
        min: 2,
        max: 10,
        required: true,
    },

    productid: {
        type: String,
        min: 10,
        required: true,
        unique: [true]
    },

    quantity: {
        type: Number,
        min: 1,
        max: 100,
        required: true,
        unique: [true]
    },

    catsize: {
        type: Number,
        min: 2,
        required: true,
        required: true,
        unique: [true]
    },

    address: {
        type: String,
        min: 20,
        max: 300,
        require: true,
    },

    mobilenumber: {
        type: Number,
        require: true,
        min: 10
    },

    payment: {
        type: String,
        require: true,
        unique: [true]
    },

    status: {
        type: String,
        enum: ['Pending', 'Aprrove', 'block'],
        default: 'Pending'
    }

})

module.exports = mongoose.model('order', orderSchema)








