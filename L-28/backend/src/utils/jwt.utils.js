import jwt from 'jsonwebtoken'

export const TokenSign = (payload) => {
  return jwt.sign(payload , process.env.JWT_SECRET_KEY , {expiresIn:'1d'})
} 

export const verifyToken = (token) => {
  return jwt.verify(token , process.env.JWT_SECRET_KEY)
}

