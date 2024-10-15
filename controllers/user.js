const express = require('express')
var USER = require('../models/user')
var bcrypt = require('bcrypt')      
var jwt = require('jsonwebtoken');


exports.usercreate = async (req, res) => {
    try {

        let { username, email, password, mobilenumber } = req.body

        password = await bcrypt.hash(password, 10)

        let data = await USER.create({ username: username, email: email, password: password, mobilenumber: mobilenumber })

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

        let Alluser = await USER.find()

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


exports.getuserbyId = async (req, res) => {
    try {

        console.log(req.params.id);

        let data = await USER.findById(req.params.id)
        // console.log(data);
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

        let data = await USER.findByIdAndDelete(req.params.id)

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

            let data = await USER.findByIdAndUpdate(req.params.id, req.body)



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

exports.userlogin = async (req, res) => {
    try {

        let { email, password } = req.body

        console.log(req.body);

        if (!email || !password) throw new Error("email or password is required")

        let cheakemail = await USER.findOne({ email: email })

        console.log(cheakemail);

        if (!cheakemail) throw new Error("email does not register")

        console.log(cheakemail.password, password);

        let pass = await bcrypt.compare(password, cheakemail.password)
        console.log(pass);


        // if (cheakemail.password !== password) throw new Error("pass not valid")

        if (!pass) throw new Error("pass not valid")

            let token = await jwt.sign({email : cheakemail.email} , 'YASH1425')

            console.log(token);
            

        res.status(201).json({
            status: 'Sucessfully',
            // data: data
            token :token

        });

    } catch (error) {

        res.status(401).json({
            status: 'Failed',
            message: error.message
        })

    }
}   
