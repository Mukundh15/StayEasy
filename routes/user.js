const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapasync = require("../utils/wrapasync.js");
const passport=require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const usercontroller=require("../controller/user.js")

router
    .route("/signup")
    .get(usercontroller.renderform)
    .post(wrapasync(usercontroller.signup));

router
    .route("/login")
    .get(usercontroller.renderlogin)
    .post(saveRedirectUrl,passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}),usercontroller.login);

router.get("/logout",usercontroller.logout);

module.exports=router;