var ADMIN = require('../models/admin')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

exports.usercreate = async (req, res) => {
    try {

        let { email, password } = req.body

        password = await bcrypt.hash(password, 10)

        let data = await ADMIN.create({ email: email, password: password })

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

exports.getAlluser = async (req, res) => {
    try {

        let Alluser = await ADMIN.find()

        res.status(201).json({
            status: 'Sucessfully',
            data: Alluser

        })

    } catch (error) {
        res.status(401).json({
            status: 'Failed',
            message: error.message
        })
    }
}

exports.getadminbyId = async (req, res) => {
    try {
        console.log(req.params.id);

        let data = await ADMIN.findById(req.params.id)

        console.log(data);


        res.status(201).json({
            status: 'Sucessfully',
            data: data
        })

    } catch (error) {
        res.status(401).json({
            status: 'Failed',
            message: error.message
        })
    }
}

exports.deletebyId = async (req, res) => {
    try {

        let data = await ADMIN.findByIdAndDelete(req.params.id)

        res.status(201).json({
            status: 'Sucessfully',
            data: data
        })


    } catch (error) {
        res.status(401).json({
            status: 'Failed',
            message: error.message
        })
    }
}

exports.updateuser = async (req, res) => {
    try {

        let { password } = req.body

        req.body.password = await bcrypt.hash(password, 10)

        let data = await ADMIN.findByIdAndUpdate(req.params.id, req.body)

        res.status(201).json({
            status: 'Sucessfully',
            // data: data
        });

    } catch (error) {

        res.status(401).json({
            status: 'Failed',
            message: error.message
        })
    }
}

exports.adminlogin = async (req, res) => {
    try {

        let { email, password } = req.body

        console.log(req.body);

        if (!email || !password) throw new Error("email or password is required")

        let cheakemail = await ADMIN.findOne({ email: email })

        console.log(cheakemail);

        if (!cheakemail) throw new Error("email does not register")

        console.log(cheakemail.password, password);

        let pass = await bcrypt.compare(password, cheakemail.password)
        console.log(pass);


        // if (cheakemail.password !== password) throw new Error("pass not valid")

        if (!pass) throw new Error("pass not valid")

        res.status(201).json({
            status: 'Sucessfully',
            // data: data
        });

    } catch (error) {

        res.status(401).json({
            status: 'Failed',
            message: error.message
        })

    }
}

