const mongoose=require("mongoose");
const initdata=require("./data.js");
const listing=require("../models/listing.js");

const MONGO_URL='mongodb://127.0.0.1:27017/Apnaroom';
main()
.then(()=>{
    console.log("database connected");
})
.catch(err => console.log(err));
async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB=async ()=>{
    await listing.deleteMany({});
    initdata.data=initdata.data.map((obj)=>({...obj,owner:"68261b2dc58bc0561fdb7e52"}));
    await listing.insertMany(initdata.data);
    console.log("data was initialized");
}
initDB();