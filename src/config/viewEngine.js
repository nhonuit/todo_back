import express from "express"
import { engine } from 'express-handlebars';
import path from 'path'
let configViewEngine = (app) => {
    //app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static('./src/public'));
    
    app.engine('.hbs', engine({extname: '.hbs'}));
    app.set('view engine', '.hbs');
    app.set("views", "./src/views")
}
module.exports = configViewEngine;
