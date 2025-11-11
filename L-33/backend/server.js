import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './src/database/db.js'
import router from './src/routes/apiRoutes.routes.js'

dotenv.config({
  path:'./.env'
})
const PORT = process.env.PORT || 4000

const app = express()

app.use(cors({
  origin:'*'
}))

app.use(express.json())

app.use('/multiapi' , router)

connectDB()

app.listen(PORT , () => {
  console.log(`server running on port ${PORT}`)
})





