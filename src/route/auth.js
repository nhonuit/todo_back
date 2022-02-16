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
//email activate
//router.post('/email-activate',authController.ActivateAccount);

router.get('/email-activate/:token',authController.ActivateAccount);


// "/authentication/activate/:token",

//forgot password
router.get('/forgotpass',authController.renderForgotPass);
router.post('/forgotpass',authController.ForgotPassword);
router.get('/newpassword',authController.RenderPushNewPassword);
router.get('/tokennewpassword:token',authController.PushNewPassword);

module.exports = router;
