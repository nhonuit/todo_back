import LocalStrategy from 'passport-local';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs/dist/bcrypt';
import User from '../models/user';




module.exports = function(passport) {
    passport.use(
        new LocalStrategy({usernameField: 'email'}, (email, password, done)=>{
            //match user
            User.findOne({email: email})
            .then(user =>{
                if(!user){
                    return done(null, false, {message:'Email chua duoc dag ky'});

                }
                //match password
                bcrypt.compare(password, user.password,(err, isMatch)=>{
                    if(err) throw(err);
                    if(isMatch) {
                        return (done(null, user));
                    }else{
                        return done(null, false , {message:'Password incorrect'});
                    }
                });
            })
            .catch(err => console.log(err));
        })
    );

    passport.serializeUser(function(user, cb) {
        process.nextTick(function() {
          cb(null, { id: user.id, username: user.username });
        });
      });
      
      passport.deserializeUser(function(user, cb) {
        process.nextTick(function() {
          return cb(null, user);
        });
      });
}
