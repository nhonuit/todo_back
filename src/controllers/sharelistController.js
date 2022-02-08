const Sharelist = require('../models/sharelist')

let getAllSharelist = async (req, res) => {
   
    Sharelist.find({}, function (err, sharelists){
           if (!err) {res.json(sharelists)}
           else{
            res.status(400).json({message:'Loi tu server'})
        }
       })
   
} 
module.exports = {
    getAllSharelist:getAllSharelist,
}