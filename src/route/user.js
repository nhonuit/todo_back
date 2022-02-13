import express  from "express";
import userController from "../controllers/userController";
const router = express.Router();



router.use('/:slug', userController.show);

router.use('/', userController.index);





module.exports = router;