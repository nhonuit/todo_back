import express from "express"
import listController from "../controllers/listController"
const router = express.Router();


//render my list
router.get('/mylist',listController.mylist);
//createnewlist
router.get('/createlist',listController.CreateListPage);
router.post('/createlist',listController.CreateList);
//render editlist
router.get('/editlist',listController.EditListPage);
//edit list handler
router.post('/editlist',listController.EditList);
//delete list by id
router.get('/deletelist',listController.DeleteListById);
//share list to user
router.post('/sharelisttouser',listController.ShareListToUser);
module.exports = router;