import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema({
  //  wid:{type:Number, require: true},
    uid:{type:Number, require: true},
    listid:{type:Number, require: true},
    status:{type:String, require: true},
    tittle:{type:String, require: true},
    description:{type:String, require: true},
    duedate:{type:Date, require:true},    
    createdAt : {type:Date, default: Date.now},
    updatedAt: {type:Date, default: Date.now},
})
module.exports = mongoose.model('Todo', todoSchema)