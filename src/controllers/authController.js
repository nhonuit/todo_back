import express from 'express'
import passport from "passport";
import bcrypt from "bcryptjs"
import User from "../models/user"

const LocalStrategy = require('passport-local');


class authController{
    //render loginpage
    login(req,res)
    {
        res.render('login');
    }
    //login handler
    signin(req,res) {
        passport.authenticate('local',{
            successRedirect: '/site',
            failureRedirect: '/auth/login',
            failureFlash: true,
        })(req,res,next);

    }
    //render signuppage
   signup(req,res)
   {
       res.render('signup');
   }
   //sign up handler
   register(req,res)
   {
    const {firstName, lastName, email, password} = req.body;
       //validation passed
        User.findOne({email: email})
        .then(user =>{
            if (user){
                res.send('User da ton tai')
            }
            else {
                const newUser =  new User({
                    firstName,
                    lastName,
                    email,
                    password,             
                   });
                   
                    //hash password
                    bcrypt.genSalt(10, (err, salt) => 
                        bcrypt.hash(newUser.password,salt, (err, hash)=>{
                            if(err) throw err;
                            newUser.password=hash;
                            newUser.save()
                            .then(user =>{
                                res.redirect('/auth/login');
                            })
                            .catch(err => console.log(err));
                        
                        })
                    )



            }
            
        });

   }


}

module.exports = new authController;