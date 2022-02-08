const mongoose = require('mongoose')
async function connect(){
    try{
    await mongoose.connect('mongodb://localhost:27017/todo');
    console.log('Connect db thanh cong')
}catch(error){
    console.log('Connect db that bai');
}
}
module.exports = {connect};