import { register , login } from '../controllers/auth.controllers.js'
import {Router} from 'express'

const Authrouter = Router()

Authrouter.post('/register' , register)
Authrouter.post('/login' , login)

export default Authrouter