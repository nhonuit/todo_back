import express from "express";
import { engine } from 'express-handlebars';
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
const db = require('./config/db/index')

//env
require('dotenv').config();
//connect db
db.connect();


let app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app);
initWebRoutes(app);

let port=process.env.PORT || 6969;
app.listen(port,()=>{
    console.log('Server running on port: '+port);
})

//mongoose
