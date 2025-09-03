import connectDB from './src/database/db.js'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config({
  path:'./.env'
})

const app = express()

app.use(cors({
  origin:"*"
}))

const port  = process.env.PORT || 3000

connectDB();

app.listen(port , (err) => {
  !err ? console.log(`server has been started in port ${port}`) : console.log("server not start!!");
})


