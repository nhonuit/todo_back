import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema({
  //wid:{type:Number, require: true},
  uid: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  ],
  listid: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'List' },
  ],
  status: { type: String, require: true },
  tittle: { type: String, require: true },
  description: { type: String },
  duedate: { type: Date, require: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})
module.exports = mongoose.model('Todo', todoSchema)
