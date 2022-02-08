const List = require('../models/list')

let getAllList = async (req, res) => {
   
       List.find({}, function (err, lists){
           if (!err) {res.json(lists)}
           else{
            res.status(400).json({message:'Loi tu server'})
        }
       })
   
} 
module.exports = {
    getAllList:getAllList,
}