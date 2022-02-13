import express from "express";
import { engine } from 'express-handlebars';
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import flash from "connect-flash/lib/flash";
import passport from "passport";
import session from "express-session";
import mongoose from 'mongoose'//test xong xóa

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


//config viewengine
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
app.use(flash());



let port=process.env.PORT || 6969;
app.listen(port,()=>{
    console.log('Server running on port: '+port);
})
/* 
//mongoose
//test ref
//khoi tao 2 schema
const personSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Story' }]
  });

  const storySchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    fans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Person' }]
  });
//khoi tao 2 model
  const Story = mongoose.model('Story', storySchema);
  const Person = mongoose.model('Person', personSchema);
  


  const author = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50
  });

  author.save(function (err) {
    if (err) return handleError(err);

    const story1 = new Story({
      title: 'Casino Royale',
      author: author._id    // gián giá trị _id cho person
    });

    story1.save(function (err) {
      if (err) return handleError(err);
    });
  });
  Story.
  findOne({ title: 'Casino Royale' }).
  populate('author').
  exec(function (err, story) {
    if (err) return handleError(err);
    console.log(story);
  });
*/