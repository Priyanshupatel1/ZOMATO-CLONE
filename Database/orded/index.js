import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user : {
        type : mongoose.Types.ObjectId,
        ref : "users"
    },
    orderDetails  :[
        {
            food: [{
                details  :{ type: mongoose.Types.ObjectId , ref: "foods"},
                quantity : {type : Number , required : true},
                        },
        ],
            
            paymode  :{type: String , required : true},
            status  :{ type : String , default :  "Placed"},
            paymentDetails  : {type: Number , required : true},
            itemTotal  : {type : Number , required : true},
            promo : { type : Number , required : true },
            tax : {type: Number , required : true },
            razorpay_payment_id : { type: Number , required : true }, 
            
        }
    ]
}, 
{
timestamps : true
})
export const OrderModel = mongoose.model("orders", OrderSchema);

