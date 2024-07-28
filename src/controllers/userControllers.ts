import { Request, Response } from "express";
import userServices from "../services/userServices";
import { hashedPassword } from "../utilis/hashingPassword";
import { IUser } from "../types/types";

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
  verifiyUser = async (req:Request, res:Response)=>{
    const token = req.params.token
    



  }
}
export default new UserControllers();
