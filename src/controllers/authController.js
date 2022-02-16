import express from 'express'
import passport from "passport";
import bcrypt from "bcryptjs"
import User from "../models/user"
import emailController from "../controllers/emailController"
import jwt from "jsonwebtoken"
import LocalStrategy from "passport-local";
//const LocalStrategy = require('passport-local');


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
                return res.status(400).json({message:'User da ton tai'})
            }
            else {
                const token = jwt.sign({firstName,lastName,email}, process.env.JWT_ACC_ACTIVATE, {expiresIn: "20m"});
                emailController.sendSimpleEmail(email,token);
                const newUser =  new User({
                    firstName,
                    lastName,
                    email,
                    password,         
                    status: false,    
                   });
                   
                    //hash password
                    bcrypt.genSalt(10, (err, salt) => 
                        bcrypt.hash(newUser.password,salt, (err, hash)=>{
                            if(err) throw err;
                            newUser.password=hash;
                            newUser.save()
                            .then(user =>{
                               
                                return  res.redirect('/auth/login');
                            })
                            .catch(err =>  res.status(400).json({message: 'Error from server'}));
                        
                        })
                    )



            }
            
        });

   }
  

   ActivateAccount(req,res){
        const {token} = req.params;
        if (token) {
            jwt.verify(token, process.env.JWT_ACC_ACTIVATE, function(err,decodedToken){
                if(err){
                    return res.status(400).json({message:"Link bị lỗi hoặc hết hạn"});
                }
                const {firstName,lastName,email} = decodedToken;
                 //validation passed
        User.findOne({email: email})
        .then(user =>{
           user.status = true;            
           user.save();
           return res.status(200).json({message:'activate success'});
        });
            })
        } else{
            return res.status(400).json({message:'Token error'});
        }
   }

   renderForgotPass(req,res){
    res.render('forgotpass');
}
ForgotPassword(req,res){

const {email} = req.body;
User.findOne({email: email})
.then(user =>{

if(user){


    const token = jwt.sign({email}, process.env.JWT_ACC_ACTIVATE, {expiresIn: "20m"});
    emailController.sendEmailForgotPassword(email,token);
return res.status(200).json({message:'Gui token thanh cong'})}
    
else{
    return res.json({message:'Email khong ton tai trong he thong'})
}})}


   TokenForgotPassword(req,res)
   {
  
             //validation passed
   
   }


   RenderPushNewPassword(req,res){
       res.render("changepass");
   }
   PushNewPassword(req,res)
{  const {token} = req.params;
if (token) {
    jwt.verify(token, process.env.JWT_ACC_ACTIVATE, function(err,decodedToken){
        if(err){
            return res.status(400).json({message:"Link bị lỗi hoặc hết hạn"});
        }
        const {email} = decodedToken;
    

    const {password} = req.body;
       //validation passed
        User.findOne({email: email})
        .then(user =>{
            if (user){
                user.password = password;
                    //hash password
                    bcrypt.genSalt(10, (err, salt) => 
                        bcrypt.hash(user.password,salt, (err, hash)=>{
                            if(err) throw err;
                            user.password=hash;
                            user.save()
                            .then(user =>{
                               
                                return  res.redirect('/auth/login');
                            })
                            .catch(err =>  res.status(400).json({message: 'Error from server'}));
                        
                        })
                    )
        

            }
        })   });
        }}
}

module.exports = new authController;