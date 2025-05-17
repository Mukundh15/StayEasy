const Listing=require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken=process.env.MAP_TOKEN;
const geocodingClient=mbxGeocoding({accessToken:mapToken});

module.exports.index=async (req,res)=>{
    const { category } = req.query;
    let filter = {};
    if (category) {
        filter.category = category.toLowerCase();
    }
    const listings = await Listing.find(filter);
    res.render("index.ejs", { listings });
};

module.exports.renderNewForm=(req,res)=>{
    res.render("new.ejs");
};

module.exports.showListing=async (req,res)=>{
    let {id}=req.params;
    const listing= await Listing.findById(id).populate({path:"reviews",populate:{path:"author",}}).populate("owner");
    if(!listing){
        req.flash("error","Listing you requested does not exist");
        return res.redirect("/listings");
    }
    res.render("show.ejs",{listing,MAP_TOKEN: process.env.MAP_TOKEN});
}

module.exports.posting=async(req,res,next)=>{
    let response=await geocodingClient.forwardGeocode({  //co-ordinates
        query: req.body.listing.location,
        limit: 2
    })
    .send()
    const newListing=new Listing(req.body.listing);
    newListing.owner=req.user._id;
    if (req.file) {
        newListing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }
    newListing.geometry=response.body.features[0].geometry;
    newListing.category=req.body.listing.category;
    await newListing.save().then((res)=>{
        console.log("data is stored");
    })
    req.flash("success","New Listing Created");
    res.redirect("/listings");
}

module.exports.editListing=async(req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested does not exist");
        return res.redirect("/listings");
    }
    let original=listing.image.url;
    original=original.replace("/upload","/upload/h_300,w_250");
    res.render("edit.ejs",{listing,original});
}

module.exports.updateListing=async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if (!listing) {
        req.flash("error", "Listing not found.");
        return res.redirect("/listings");
    }
    if(typeof req.file!=="undefined"){
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image={url,filename};
        await listing.save();
    }
    req.flash("success","Listing Updated");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteListing=async (req,res)=>{
    let {id}=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted");
    res.redirect("/listings");
}

module.exports.searchdestination=async (req, res) => {
    const { q } = req.query;
    if (!q || q.trim() === "") {
        req.flash("error", "Please enter a search term.");
        return res.redirect("/listings");
    }
    const regex=new RegExp(q, 'i');
    const listings=await Listing.find({
        $or: [
            { title: regex },
            { location: regex },
            { category: regex }
        ]
    });
    res.render("index.ejs", { listings });
}