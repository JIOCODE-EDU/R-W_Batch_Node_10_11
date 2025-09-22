import User from '../models/user.models.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async(req , res) => {
  try{
    const existing = await User.findOne({email})
    if(existing) return res.status(400).json({error:"User Alredy Exists."})

    // hash password

    const hashed = await bcrypt.hash(password , 10)
    const user = new User({name , email , password:hashed})

    await user.save()

    res.status(201).json({message:"User register successfully"})
  }catch(err){
    res.status(500).json({error:err.message})
  }
}

export const login = async(req , res) => {
  try{

    const {email , password} = req.body
    
  }catch(err){
    res.status(500).json({error:err.message})
  }
}