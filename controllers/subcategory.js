var SUBCAT = require('../models/subcategory')

exports.subcategoryAdd = async (req, res) => {

    try {

        var data = await SUBCAT.create(req.body)

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

exports.getAllsubcategory = async (req, res) => {
    try {

        let data = await SUBCAT.find()

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

exports.subcategoryUpdate = async (req, res) => {
    try {
        console.log(req.params.id);

        let data = await SUBCAT.findByIdAndUpdate(req.params.id , req.body)

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


exports.subcategorydelete = async (req, res) => {
    try {

        console.log(req.params.id);

        let data = await SUBCAT.findByIdAndDelete(req.params.id)

        res.status(201).json({
            status: 'Sucessfully',
        })

    } catch (error) {
        res.status(401).json({
            status: 'Failed',
            message: error.message
        })
    }
}


