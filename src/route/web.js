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
    


    return app.use("/", router);
} 

module.exports=initWebRoutes;