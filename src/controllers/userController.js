
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

}

module.exports = new userController;