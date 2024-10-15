var ORDER = require("../models/order")

exports.orderAdd = async(req, res) => {
    try {

        var data = await ORDER.create(req.body)

        res.status(201).json({
            status: 'Sucessfully',
            data
        })
    } catch (error) {

        res.status(401).json({
            status: 'Failed',
            message: error.message
        })
    }
}

exports.orderallget = async (req, res) => {
    try {

        let data = await ORDER.find()

        res.status(201).json({
            status: 'Sucessfully',
            data
        })

    } catch (error) {
        res.status(401).json({
            status: 'Failed',
            message: error.message
        })
    }
}

exports.orderupdate = async (req, res) => {
    try {
        console.log(req.params.id);

        let data = await ORDER.findByIdAndUpdate(req.params.id , req.body)

        res.status(201).json({
            status: 'Sucessfully',
            data 
        })

    } catch (error) {
        res.status(401).json({
            status: 'Failed',
            message: error.message
        })
    }
}

exports.orderdelete = async(req ,res) => {
    try {
        
        console.log(req.params.id);

        let data = await ORDER.findByIdAndDelete(req.params.id)

        res.status(201).json({
            status: 'Sucessfully',
            data
        })
    } catch (error) {
        res.status(401).json({
            status: 'Failed',
            message: error.message
        })
    }
}

