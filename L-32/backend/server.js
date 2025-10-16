import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './src/database/db.js'

dotenv.config({
  path:'./.env'
})

const app = express()

app.use(cors({
  origin:'*'
}))

app.use(express.json())

const PORT = process.env.PORT || 4000

connectDB()

app.listen(PORT , () => {
  console.log(`server running on port ${PORT}`)
})





