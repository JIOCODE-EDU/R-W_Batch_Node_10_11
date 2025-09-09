import express from 'express'
import dotenv from 'dotenv'

dotenv.config({
  path:'./.env'
})

let port  = process.env.PORT || 3000

let app = express()

app.listen(port , (err) => {
  !err ? console.log(`server has been started in port ${port}`) : null
})