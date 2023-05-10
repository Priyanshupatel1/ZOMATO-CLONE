import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jws from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    
        fullName : {type : string , required :true},
        email : {type : string , required :true},
        password :{type : String},
        address : [{detail : {type : String }, for: {type: String} }],
        phoneNumber : [{ Type : Number }],


        
}, 
{
timestamps : true
});
//attachments
UserSchema.methods.generateJwtToken = function(){
    return jwt.sign({user: this._id.tostring()},"ZomatoApp");//secret key for sign in /up //sign here is a method

};

//helper functions
UserSchema.statics.findByEmailAndPhone  =  async (email , phoneNumber) => {
    const checkUserByEmail = await UserModel.findOne({email});
    const checkUserByPhone = await UserModel.findone({ phoneNumber });

    if(checkUserByEmail || checkUserByPhone ){
        throw new Error ("User Already exists !!")
    }
    return false
};//for checking user exist or not
UserSchema.statics.findByEmailAndPassword = async (email, password) => {
    const user = await UserModel.findOne({email});
    if(!user )throw new Error ("User doesn't exist")
     
    //compare password 
    const doesPassMatch = await bcrypt.compare(password , user.password)
    if(!doesPassMatch) throw new Error ("Invalid Credentials");

    return user;

};//for authentication of user
UserSchema.pre('save' , function (next){

    
})
export const UserModel = mongoose.model("users", UserSchema);

