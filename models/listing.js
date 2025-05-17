const mongoose=require("mongoose");
const review=require("./review");
const { required } = require("joi");

const listingSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    image:{
        url:String,
        filename:String,
    },
    price:Number,
    location:String,
    country:String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ],
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    geometry:{
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    category:{
        type:String,
        required:true,
    }
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await review.deleteMany({_id:{$in:listing.review}});
    }
})

const listing=mongoose.model("listing",listingSchema);
module.exports= listing;