const User=require("../models/user");

module.exports.renderform=(req,res)=>{
    res.render("signup.ejs");
}

module.exports.signup=async(req,res)=>{
    try{
        let{username,email,password}=req.body;
        const newUser=new User({email,username});
        const registeredUser=await User.register(newUser,password);
        req.login(registeredUser,(err)=>{
            if(err){
                next(err);
            }
        })
        req.flash("success",`Welcome ${username}`);
        res.redirect("/listings");
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
}

module.exports.renderlogin=(req,res)=>{
    res.render("login.ejs");
}

module.exports.login=async(req,res)=>{
    req.flash("success","Welcome to ApnaRoom! You are Logged in!");
    let redirectUrl=res.locals.redirectUrl||"/listings";
    return res.redirect(redirectUrl);
}

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        next(err);
    })
    req.flash("success","You are logged out now");
    res.redirect("/listings");
}