import mongoose from 'mongoose';
const   Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId;
const ListSchema = new mongoose.Schema({
    id: {type:Number, require: true},
    uid: [
        {type: mongoose.Schema.Types.ObjectId,ref:'User'},
    ],
    title: {type:String, require: true},
    shareduid: [
        {type: mongoose.Schema.Types.ObjectId,ref:'User'},
    ],
    description: {type:String},
    createdAt: {type:Date, default: Date.now},
    updatedAt: {type:Date, default: Date.now},
})
module.exports = mongoose.model('List', ListSchema)