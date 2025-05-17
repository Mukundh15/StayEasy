const Review=require("../models/review");
const Listing=require("../models/listing");
module.exports.addReview=async(req, res,next) => {
    try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      throw new ExpressError(404, "Listing not found");
    }
    if (!req.body.review) {
      throw new ExpressError(400, "Review data missing");
    }
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "New Review Created");
    res.redirect(`/listings/${listing._id}`);
  } catch (err) {
    next(err);
  }
}

module.exports.deleteReview=async(req,res,next)=>{
    try {
    const { id, reviewid } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewid } });
    await Review.findByIdAndDelete(reviewid);
    req.flash("success", "Review Deleted");
    res.redirect(`/listings/${id}`);
  } catch (err) {
    next(err);
  }
}