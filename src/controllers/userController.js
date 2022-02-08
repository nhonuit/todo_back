const User = require('../models/user')



let getAllUser = async (req, res) => {
   
    User.find({})
    .then(users=> res.json(users))
    .catch(error=> next(error));
} 

let createUser = async(req, res) => {
    
}


module.exports = {
    getAllUser: getAllUser,
    createUser: createUser,
}