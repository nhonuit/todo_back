import express from 'express'
import todoController from '../controllers/todoController';
const router = express.Router();




//render item detail
router.get('/todo',todoController.todo);
//create new item
router.get('/createitem',todoController.CreateItem);
router.post('/createitem',todoController.CreateNewItem);
//update item
router.get('/updateitem',todoController.UpdateItemPage);
router.post('/updateitem',todoController.UpdateItemById);
//delete item
router.get('/deleteitem',todoController.DeleteItemById);
//comparedate -> outdated
router.get('/outdated',todoController.OutdatedItem);
//finnish item
router.get('/finnishitem',todoController.FinnishItem);

module.exports = router;

