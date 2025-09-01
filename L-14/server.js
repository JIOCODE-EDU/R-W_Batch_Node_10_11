const express = require('express')
const multer  = require('multer')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config({
  path:'./.env'
})

const app = express()

const port  = process.env.PORT || 3000

const storage = multer.diskStorage({
  destination:function(req , file , cb){
    cb(null , "uploads/")
  },
  filename:function(req , file , cb){
    cb(null , Date.now()  + path.extname(file.originalname))
  }
})

// const fileFilter = (req ,file , cb) => {
//   const allowType = /jpeg|jpg|png|pdf/
//   const extname = allowType.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = allowType.test(file.mimetype)

//   if(extname && mimetype){
//     cb(null , true)
//   }else{
//     cb(new Error ("Only Images and PDF File are allowed!!"))
//   }
// }

const upload = multer({
  storage:storage,
  // limits:{fieldSize:5 * 1024 * 1024},
  // fileFilter:fileFilter
})

app.get('/' , (req , res) => {
  res.send(
    `
    <h2>File Upload With Multer</h2>
    <form action="/upload" method="POST">
      <input type="file" name="myfield"/>
      <button type="submit">Upload</button>
    </form>
    `
  )
})

app.post("/upload" , upload.single('myfield') ,  (req , res) => {
  try{
    res.send({
      message:"File Upload Successully!!",
      file:req.file
    })
  }catch(err){
    res.status(400).send({error:err.message})
  }
})

// app.post("/upload-multiple-file" , upload.array("myfield" , 10) , (req , res) => {
//   try{
//     res.send({
//       message:"File Upload Successully!!",
//       file:req.file
//     })
//   }catch(err){
//     res.status(400).send({error:err.message})
//   }
// })

app.listen(port , (err) => {
  !err ? console.log(`server has been started in port ${port}`) : console.log("server not start!!");
})


