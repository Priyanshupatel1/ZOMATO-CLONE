import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
name :  { type: String , required : true},
city : {type : String , required : true },
address :{ type: String , required: true},
mapLocation : { type : String , required : true},
cuisine : [ String],
restaurant : String ,
website : String ,
popularDishes : [String ],
averageCost : Number , 
amenties : [String],
menuImages : {
    types: mongoose.Types.ObjectId,
    ref : "images",
},
menu : {
    types: mongoose.Types.ObjectId,
    ref : "menus",
},
reviews : [{
       types: mongoose.Types.ObjectId,
        ref : "reviews",
    
}],

photos: {
    types: mongoose.Types.ObjectId,
    ref : "photos",
}

    
}, 

{
timestamps : true
})
export const RestaurantModel = mongoose.model("restaurants", RestaurantSchema);

