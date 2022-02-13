import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema({
    wid:{type:Number, require: true},
    uid:{type:Number, require: true},
    status:{type:String, require: true},
    title:{type:String, require: true},
    description:{type:String, require: true},
    duedate:{type:Date, require:true},
    list_id:{type:Number, require: true},
    createdAt : {type:Date, default: Date.now},
    updatedAt: {type:Date, default: Date.now},
})
module.exports = mongoose.model('Todo', todoSchema)