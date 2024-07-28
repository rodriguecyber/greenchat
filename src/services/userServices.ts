import { IEmail, sendEmail } from "../helpers/email";
import User from "../models/user";

import { IUser } from "../types/types";
import { generateToken } from "../utilis/token";

class UserServices {
  createUser = async (user: IUser) => {
    try {
      const newUser = await User.create(user);
      const token = await generateToken(newUser);
      const email: IEmail = {
        receiver: newUser.email,
        text: `localhost:5000/user/verify/${token}`,
        subject: "Account verification",
      };
      await sendEmail(email);
      if (!newUser) {
        return { status: 500, message: "Unknown Error Occured" };
      }
      return { status: 201, message: "user Created successfully", newUser };
    } catch (error: any) {
      return { status: 500, message: `Error ${error.message}` };
    }
  };
  verifyUser = async (userId: any) => {
    try {
      const user = await User.findById(userId);
      if (!user) {
        return { status: 404, message: "user does not exist" };
      }
      if (user.isVerified === true) {
        return { status: 404, message: "user already verified" };
      }

      return { status: 200, message: "user verified successfuly" };
    } catch (error: any) {
      return { status: 500, message: `Error ${error.message}` };
    }
  };
  getUser=async(user:IUser)=>{
   try {
     const foundUser = await User.findOne({ email: user.email });
     if(!foundUser) return null
     return foundUser
   } catch (error) {
    return null
   }
   
    
  }
}
export default new UserServices();
