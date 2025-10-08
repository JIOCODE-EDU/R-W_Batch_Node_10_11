import { Router } from "express";
import { register , login , googleLogin , googleCallback } from "../controllers/auth.controllers.js";


const authRouter = Router()

authRouter.post('/register' , register)
authRouter.post('/login' , login)
authRouter.get('/google' , googleLogin)
authRouter.get('/google/callback' , googleCallback)

export default authRouter
