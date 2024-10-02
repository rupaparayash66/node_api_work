var mongoose = require("mongoose")

var userSchema = new mongoose.Schema({

    name : String ,
    email : {
        type : String,
        unique : [true , "email aleady exist"]
    },
    password : Number

})

module.exports = mongoose.model('user' , userSchema)
