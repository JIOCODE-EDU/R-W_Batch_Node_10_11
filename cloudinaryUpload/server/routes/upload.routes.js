import express from 'express'
import multer from 'multer'
import {CloudinaryStorage} from 'multer-storage-cloudinary'
import {v2 as cloudinary} from 'cloudinary'
import uploadFile from '../controllers/upload.controllers.js'
import dotenv from 'dotenv'

const router = express.Router()

// dotenv.config({
//   path:'./.env'
// })

// cloudinary config

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
})

// storage setup

const storage = new CloudinaryStorage({
  cloudinary,
  params: async(req , file) => {
    let resourceType = 'image';
    if(file.mimetype === 'application/pdf') resourceType = 'raw';
    return{
      folder:'rnw_assets',
      resource_type:resourceType,
      allow_formats:['jpg' , 'png' , 'jpeg' , 'pdf']
    }
  }
})

// multer setup

const upload = multer({
  storage,
  limits:{fileSize:1024*1024*5},
  fileFilter:(req , file , cb) => {
    const allowed = /jpeg|jpg|png|pdf/
    if(allowed.test(file.mimetype)) cb(null , true)
    else cb(new Error('Only Images and PDFs are allowed!'))
  }
})

router.post('/' , upload.single('file') , uploadFile)

export default router