import { Request, Response, Router } from "express";
import { userRoutes } from "./userRoutes";

const appRouter = Router()
appRouter.use("/user",userRoutes)
  
export default appRouter
