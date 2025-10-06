import jwt from 'jsonwebtoken'

export const protect = (req , res , next) => {
  try{
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(401).json({error:"No token , unathorized"})
    
    const decode = jwt.verify(token , process.env.JWT_SECRET_TOKEN_KEY)
    req.user = decode
    next()

  }catch(err){
    res.status(401).json({error:"invalid token"})
  }
}