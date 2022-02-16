import User from "../models/user"
class userController{
    //get users
    index(req,res)
    {   var scripts = [{ script: '/js/myTestScript.js' }];
        res.render('site',{scripts:scripts});

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

    renderProfile(req,res)
    {
        res.render('profile');
    }

}

module.exports = new userController;