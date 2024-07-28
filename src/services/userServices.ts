import { Request, Response } from "express";
import { IEmail, sendEmail } from "../helpers/email";
import User from "../models/user";

import { IUser } from "../types/types";

class UserServices {
  createUser = async (user: IUser) => {
    
    try {
      const newUser = await User.create(user);
      const email:IEmail={
        receiver:newUser.email,
        text:"verify email",
        subject:"Account verification"
      }
      await sendEmail(email);
      if (!newUser) {
        return { status: 500, message: "Unknown Error Occured" };
      }
      return {status:201,message:"user Created successfully",newUser}
    } catch (error:any) {
          return { status: 500, message: `Error ${error.message}` };
    }
  };
  verifyUser = async(user:any)=>{
    await User.updateOne(user,{isVerified:true})
  }
}
export default new UserServices()
