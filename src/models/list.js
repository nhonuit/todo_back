import mongoose from 'mongoose';
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const ListSchema = new mongoose.Schema({
    
    uid: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    ],
    tittle: { type: String, require: true },
    shareduid: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: false },
    ],
    //description: {type:String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})
module.exports = mongoose.model('List', ListSchema)