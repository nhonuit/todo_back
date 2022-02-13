
class userController{
    //get users
    index(req,res)
    {
        res.render('mylist');
    }
    //get /users/:slug
    show(req,res){
res.send('User detail');
    }

}

module.exports = new userController;