import express from "express"
import listController from "../controllers/listController"
const router = express.Router();


//render my list;
router.get('/get',listController.GetAllMyList);
//createnewlist
router.get('/create',listController.CreateListPage);
router.post('/create',listController.CreateList);
//render editlist
router.get('/edit',listController.EditListPage);
//edit list handler
router.post('/edit',listController.EditList);
//delete list by id
router.post('/delete/:_id',listController.DeleteListById);

router.get('/delete/:_id',listController.GetAllMyList);
//share list to user
router.post('/share',listController.ShareListToUser);
//get all my list


module.exports = router;