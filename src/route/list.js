import express from "express"
import listController from "../controllers/listController"
const router = express.Router();


//render my list
router.get('/mylist',listController.mylist);
//createnewlist
//router.post('createnewlist');
module.exports = router;