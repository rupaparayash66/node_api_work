
// seller middleware

var jwt = require('jsonwebtoken')

var SELLER = require('../models/seller')

exports.email = async (req, res, next) => {
    try {

        let token = req.headers.token

        if (!token) throw new Error("must be provide jwt")

        let email = await jwt.verify(req.headers.token, 'YASH1425')

        let finddata = await SELLER.findOne({ email: email.email })

        if (!finddata) throw new Error("user not found")

        next()

    } catch (error) {
        res.status(401).json({
            status: 'failed',
            message: error.message
        })
    }
}

