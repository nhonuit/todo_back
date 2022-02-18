import express from "express";
import userController from "../controllers/userController";
import listController from "../controllers/listController"
const router = express.Router();




router.use('/home', userController.index);


router.get('/todo', userController.todo);


router.get('/userlist', userController.GetAllUser);

router.get('/mylist', listController.mylist);

router.get('/sharelist', listController.renderSharelist);

router.get('/profile?:_id', userController.renderProfile);

module.exports = router;