import { Router } from "express";
import userControllers from "../controllers/userControllers";



export const userRoutes = Router()
userRoutes.post("/register", userControllers.createUser)