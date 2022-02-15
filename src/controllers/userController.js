import User from "../models/user"
class userController{
    //get users
    index(req,res)
    {
        res.render('site');
    }
    todo(req,res)
    {
        res.render('todo')
    }
    //get /users/:slug
    show(req,res){
res.send('User detail');
    }

















    //api user

    //get all user
    GetAllUser(req,res)
    { 
        User.find({}, function(err, users) {
            res.send({users});
         });
    }
}

module.exports = new userController;