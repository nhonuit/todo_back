const mongoose = require('mongoose')
const validator = require('validator')
const userSchema = new mongoose.Schema({
    uid: {type:Number, require: true},
    email: {
        type:String, 
        require: true, 
        lowercase: true,
        validate: (value) => {
          return validator.isEmail(value)
        }},
    password: {type:String, require: true},
    firstName: {type:String, require:true },
    lastName: {type:String, require: true},
    status: {type:Boolean, require: true},
    createdAt : {type:Date, default: Date.now},
    updatedAt: {type:Date, default: Date.now},
})
module.exports = mongoose.model('User', userSchema)