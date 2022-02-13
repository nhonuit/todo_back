import express from "express"
import userController from "../controllers/userController"
import homeController from "../controllers/homeController"
import todoController from "../controllers/todoController"
import listController from "../controllers/listController"
import sharelistController from "../controllers/sharelistController"
import auth from "../route/auth"
import user from "../route/user"
import list from "../route/list"


let router = express.Router();
let initWebRoutes  = (app) => {

    router.use('/auth',auth);
    router.use('/user',user);   
    router.use('/list',list);
    router.get('/', (req,res)=>{
        res.render('home')
    })
    
    
    
    return app.use("/", router);
} 

module.exports=initWebRoutes;