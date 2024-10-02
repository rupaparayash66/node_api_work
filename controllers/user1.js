var USER1 = require('../models/user1')

exports.userCreate = async(req , res , next) => {
    try {
        
        let {name , email ,password} = req.body

        if (!name || !email || !password) throw new Error('All  input filds required')

        let data = await USER1.create({name : name , email : email , password : password})

        res.status(201).json({
            status : 'Sucessfully',
            data
        })

    } catch (error) {
        res.status(401).json({
            status : 'Failed',
            message : error.message
        })
    }
}

exports.getAlluser = async(req ,res )=>{
    try {
        
        let Alluser = await USER1.find()

        res.status(201).json({
            status : 'Sucessfully',
            data : Alluser
            
        })
    } catch (error) {
        res.status(401).json({
            status : 'Failed',
            message : error.message
        })
    }
}