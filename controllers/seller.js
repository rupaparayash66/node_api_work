var SELLER = require('../models/seller')
var bcrypt =require('bcrypt')


exports.usercreate = async (req, res) => {
    try {

        let { username, email, password, mobilenumber, birthdate, aadharcardnumber, pancardnumber, gstnumber, address, city, district, state, pincode } = req.body

       req.body.password = await bcrypt.hash(password , 10 )

        let data = await SELLER.create(req.body)

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

        let Alluser = await SELLER.find()

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

exports.getsellerbyId = async (req, res) => {
    try {
        console.log(req.params.id);

        let data = await SELLER.findById(req.params.id)

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

        let data = await SELLER.findByIdAndDelete(req.params.id)

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

        let data = await SELLER.findByIdAndUpdate(req.params.id , req.body)

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

exports.sellerlogin = async (req, res) => {
    try {

        let { email, password } = req.body

        console.log(req.body);
        
        if (!email || !password) throw new Error("email or password is required")

        let cheakemail = await SELLER.findOne({ email: email })

        console.log(cheakemail);

        if (!cheakemail) throw new Error("email does not register")

            console.log(cheakemail.password ,password);

            let pass = await bcrypt.compare(password , cheakemail.password)
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
