import express from 'express'
import dotenv from 'dotenv'
import connectDB from './src/database/db.js'

const app = express()

dotenv.config({
  path:'./.env'
})

app.set("view engine" , 'ejs')

connectDB();

const port = process.env.PORT || 3000

app.get('/' , (req  ,res) => {
  return res.render('index')
})

app.listen(port , (err) => {
  !err ? console.log(`server has been start in port ${port}`) : console.log("server not start");
})