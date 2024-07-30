import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import userServices from "../services/userServices";
import { hashedPassword } from "../utilis/hashingPassword";
import { IUser } from "../types/types";
import { decodeToken, generateToken } from "../utilis/token";
import { userInfo } from "os";

class UserControllers {
  createUser = async (req: Request, res: Response) => {
    const user: IUser = req.body;
    try {
      user["password"] = await hashedPassword(user.password);
      const resp = await userServices.createUser(user);

      return res
        .status(resp.status)
        .json({ message: resp.message, user: resp.newUser });
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  };
  verifiyUser = async (req: Request, res: Response) => {
    try {
      const token = req.params.token;
      const user = await decodeToken(token);
      const verified = await userServices.verifyUser(user._id);
      res.status(verified.status).json(verified.message);
    } catch (error: any) {
      res.status(500).json({ message: `Error ${error.message}` });
    }
  };
  login = async(req:Request,res:Response)=>{
    const user = req.body
    const userInfo =  await userServices.getUser(user)
    if(!userInfo){
      return res.status(500).json({message:"email not found"})
    }
    if(!userInfo.isVerified){
     return res.status(200).json({ message: "user not verified" }); 
    }
    const comparedPassword = await bcrypt.compare(user.password, userInfo.password)
    if(!comparedPassword){
    return  res.status(200).json({message:"password not match"})
    }
    const token = await generateToken(userInfo)
    return res.status(200).json({token})

  }
   loggedUSer  = async (req:Request,res:Response)=>{
    try {
      
      const user = (req as any).user;
      const loggedUSer = await userServices.getUser(user);
      res.status(200).json({ user: loggedUSer });
    } catch (error) {
      res.status(500).json("failed to load logged user")
    }
   }
}
export default new UserControllers();
