import express from "express";
import { engine } from 'express-handlebars';
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import flash from "connect-flash/lib/flash";
import passport from "passport";
import session from "express-session";

const db = require('./config/db/index')
//env
require('dotenv').config();
//connect db
db.connect();


let app = express();


//config passport
require('./config/passport')(passport);


//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


//config viewengines
viewEngine(app);


//routing
initWebRoutes(app);


//express session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
 // cookie: { secure: true }
}));


//passport middleware
app.use(passport.authenticate('session'));



//connect flash
//app.use(flash());



let port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('Server running on port: '+port);
})