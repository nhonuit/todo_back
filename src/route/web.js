import express from "express"
import userController from "../controllers/userController"
import homeController from "../controllers/homeController"
import todoController from "../controllers/todoController"
import listController from "../controllers/listController"
import auth from "../route/auth"
import user from "../route/user"
import list from "../route/list"
import todo from "../route/todo"


let router = express.Router();
let initWebRoutes  = (app) => {

    router.use('/auth',auth);
    router.use('/user',user);   
    router.use('/list',list);
    router.use('/todo',todo);
    
    
    
    
    return app.use("/", router);
} 

module.exports=initWebRoutes;