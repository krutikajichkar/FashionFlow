import mongoose , {Schema } from "mongoose";

export interface UserDocument  {
email : String;
password : String;
createdAt : Date;
updatedAt : Date;
}

const userSchema = new Schema<UserDocument>({
email : {
    type : String,
    required : true,
    unique : true,
    trim : true,
    lowercase : true
},
password : {
    type : String,
    required : true,
   
}
},{timestamps: true})

export const User = mongoose.model<UserDocument>("User",userSchema);