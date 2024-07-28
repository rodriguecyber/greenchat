import jwt from "jsonwebtoken";
import env from "../config/env";
import { IUser } from "../types/types";
export const generateToken = async (user: any) => {
  try {
    const token = jwt.sign({user}, env.JWT_SECRET, { expiresIn: "24h" });
    return token;
  } catch (error: any) {
    throw Error(error);
  }
};
export const decodeToken =async (token:any)=>{
 try {
   
  const decoded =  jwt.verify(token, env.JWT_SECRET) as {user:any};
  return decoded.user
 } catch (error:any) {
  throw Error(error)
 }
}
