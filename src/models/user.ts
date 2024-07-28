import mongoose, { Schema } from "mongoose";

import { IUser } from "../types/types";


const userSchema =  new Schema<IUser>({
     firstName:{type:String, required:true},
    lastName:{type:String, default:null},
    phone:{type:Number, default:null},
    email:{type:String, required:true, unique:true},
    gender:{type:String, default:null},
    isVerified:{type:Boolean, default:false},
    isBlocked:{type:Boolean, default:false},
    location:{type:String, default:null},
    country:{type:String, default:null},
    isOnline:{type:Boolean,default:false},
    profile:{type:String,default:null},
    password:{type:String, required:true}
},{
    timestamps:true
})
const User = mongoose.model<IUser>("user",userSchema)
export default User