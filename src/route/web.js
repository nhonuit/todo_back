import express from "express"
import userController from "../controllers/userController"
import homeController from "../controllers/homeController"
import todoController from "../controllers/todoController"
import listController from "../controllers/listController"
import sharelistController from "../controllers/sharelistController"

let router = express.Router();
let initWebRoutes  = (app) => {



    router.get('/', (req,res)=>{
        res.render('home')
    })
    
    router.get('/api/get-all-users', userController.getAllUser)
    
    router.get('/site', (req,res)=>{
        res.render('site')
    })
  
    router.get('/createnewitem', (req,res)=>{
        res.render('createnewitem')
    })  
    router.get('/createnewlist', (req,res)=>{
        res.render('createnewlist')
    })  
    router.get('/mylist', (req,res)=>{
        res.render('mylist')
    })  
    router.get('/sharelist', (req,res)=>{
        res.render('sharelist')
    })
      
    router.get('/signup', (req,res)=>{
        res.render('signup')
    })
       
    router.get('/login', (req,res)=>{
        res.render('login')
    })
    router.get('/todo', (req,res)=>{
        res.render('todo')
    })
    return app.use("/", router);
} 

module.exports=initWebRoutes;