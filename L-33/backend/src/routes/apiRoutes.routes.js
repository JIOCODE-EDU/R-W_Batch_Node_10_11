import express from 'express'
import { getDashboard } from '../services/apiServices.services.js'

const router = express.Router()

router.get("/dashboard" , async(req ,res) => {
  try{
    const data = await getDashboard();
    res.json({success:true , data})
  }catch(err){
    res.status(500).json({success:false , error:err.message})
  }
})

export default router
