import connectDB from './src/database/db.js'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './src/routes/student.routes.js'
import Authrouter from './src/routes/auth.routes.js'

dotenv.config({
  path:'./.env'
})

const app = express()

app.use(cors({
  origin:"*"
}))

app.use(bodyParser.json())

const port  = process.env.PORT || 3000

connectDB();

app.use("/students" , router)
app.use("/auth" , Authrouter)

app.listen(port , (err) => {
  !err ? console.log(`server has been started in port ${port}`) : console.log("server not start!!");
})


