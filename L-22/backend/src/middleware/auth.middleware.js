import jwt from 'jsonwebtoken'

export const protect = (req , res , next) => {
  try{
    const token = req.headers.authorization?.split(" ")[1]
  }catch(err){
    res.status(401).json({error:"invalid token"})
  }
}