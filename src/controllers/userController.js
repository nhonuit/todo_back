import User from "../models/user"
import List from "../models/list"
import { multipleMongooseToObject } from "../util/mongoose"
class userController {
    //get users
    index(req, res) {
        var scripts = [{ script: '/js/myTestScript.js' }];
        res.render('site', { scripts: scripts });

    }

    todo(req, res) {
        res.render('todo')
    }
    //get /users/:slug
    show(req, res) {
        res.send('User detail');
    }









    //api user

    //get all user
    GetAllUser(req, res) {
        User.find({}, function (err, users) {
            res.send({ users });
        });
    }

    renderProfile(req, res, next) {
        const { _id } = req.query;
        User.find({ _id: _id })
            .then(users => {
                //   User.find({_id:lists.shareduid})
                // .then(users =>
                res.render('profile', {
                    users: multipleMongooseToObject(users),
                    //users:multipleMongooseToObject(users),
                })
                //)

            })
            .catch(next);
    }

}

module.exports = new userController;