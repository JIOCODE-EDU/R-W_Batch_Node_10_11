import passport from 'passport'
import * as jwtUtile from '../utils/jwt.utils.js'
import User from '../models/Users.models.js'

const URL = ""

export const register = async(req , res) => {
  const {email , password , name} = req.body
  try{
    let user = await User.findOne({email})
    if(user) return res.status(400).json({message:"User Already Registered."})

    user = new User({email , password ,name});
    await user.save()
    const token = jwtUtile.TokenSign({id:user._id})
    res.cookie('token' , token , {httpOnly:true , secure:true}).json({
      success:true,
      user:{id:user._id , email:user.email , password:user.password}
    })
  }catch(err){
    res.status(500).json({message:err.message})
  }
}

export const login =  async(req , res , next) => {
  passport.authenticate('local' , (err , user , info) => {
    if(err) return next(err)
    if(!user) return res.status(401).json(info)
    const token = jwtUtile.TokenSign({id:user._id})
    res.cookie('token' , token , {httpOnly:true  ,  secure:true}).json({
      success:true,
      user:{id:user._id , email:user.email , password:user.password},
      token
    })
  })(req , res , next)
}

export const googleLogin = passport.authenticate('google' , /*{scope:[profile , email]} */)

export const googleCallback = (req , res , next) => {
  passport.authenticate('google' , (err , user) => {
    if(err) return next(err)
    if(!user) return res.redirect('/register')
    const token = jwtUtile.TokenSign({id:user._id})
    res.redirect(`${URL}?token=${token}`)
  })(req , res , next)
}

