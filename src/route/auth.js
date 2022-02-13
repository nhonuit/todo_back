import express  from "express";
import passport from "passport";
import authController from "../controllers/authController"
const router = express.Router();

//login
router.get('/login',authController.login);
router.post('/login',authController.signin);

//signup
router.get('/signup',authController.signup);
router.post('/signup',authController.register);


module.exports = router;
