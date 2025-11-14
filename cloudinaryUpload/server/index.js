import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import connectDB from './auth/db.js'
import uploadFile from './controllers/upload.controllers.js'
import router from './routes/upload.routes.js'
import path from 'path'

dotenv.config({
  path:'./.env'
})

const app = express()

const port  = process.env.PORT

app.use(cors({
  origin:"*"
}))

app.use(express.json())

app.use('/upload' , router)

app.get('/',  (req , res) => {
  res.send("Backend connected!")
})

app.listen(port , (err) => {console.log(`Server running on port ${port}`) , connectDB()})


