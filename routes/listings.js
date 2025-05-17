const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapasync.js");
const {validateListing,isLoggedIn}=require("../middleware.js");
const {isOwner}=require("../middleware.js");
const multer  = require('multer');
const{storage}=require("../cloudConfig.js");
// const upload = multer({ dest: 'uploads/' });
const upload = multer({ storage });

const listingController=require("../controller/listing.js");

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn,upload.single("listing[image]"),validateListing,wrapAsync(listingController.posting));

router.get("/new",isLoggedIn,listingController.renderNewForm);
router.get("/search",listingController.searchdestination)

router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn,isOwner,validateListing,wrapAsync(listingController.updateListing))
    .delete(isLoggedIn,isOwner,wrapAsync(listingController.deleteListing));

router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.editListing));

module.exports=router;
