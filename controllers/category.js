var CAT = require("../models/category")

exports.categoryAdd = async(req, res) => {
    try {

        var data = await CAT.create(req.body)

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

exports.getAllcategory = async (req, res) => {
    try {

        let data = await CAT.find()

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

exports.categoryUpdate = async (req, res) => {
    try {
        console.log(req.params.id);

        let data = await CAT.findByIdAndUpdate(req.params.id , req.body)

        res.status(201).json({
            status: 'Sucessfully',
            data :data
        })
    } catch (error) {
        res.status(401).json({
            status: 'Failed',
            message: error.message
        })
    }
}


exports.categorydelete = async (req, res) => {
    try {

        console.log(req.params.id);

        let data = await CAT.findByIdAndDelete(req.params.id)

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

