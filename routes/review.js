const express=require("express");
const router=express.Router({mergeParams:true});
const Listing=require("../models/listing.js");
const wrapAsync=require("../utils/wrapasync.js");
const ExpressError=require("../utils/ExpressError.js");
const {reviewSchema}=require("../schema.js");
const review=require("../models/review.js");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate"); 
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js");
const reviewcontroller=require("../controller/review.js")

router.post("/",isLoggedIn, validateReview, wrapAsync(reviewcontroller.addReview));

router.delete("/:reviewid",isLoggedIn,isReviewAuthor,wrapAsync(reviewcontroller.deleteReview));

module.exports=router;
