import express  from "express";
import userController from "../controllers/userController";
const router = express.Router();




router.use('/dashboard', userController.index);


router.get('/todo', userController.todo);
router.get('/userlist',userController.GetAllUser);
   




module.exports = router;