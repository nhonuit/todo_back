const mongoose = require ('mongoose')
const SharelistSchema = new mongoose.Schema({
    id: {type:Number, require: true},
    uid: {type:Number, require: true},
    title:{type:String, require: true},
    description: {type:String, require: true},
    createdAt : {type:Date, default: Date.now},
    updatedAt: {type:Date, default: Date.now},
})
module.exports = mongoose.model('Sharelist', SharelistSchema)