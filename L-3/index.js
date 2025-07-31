const http = require('http')
const express = require('express')

const port = 4050

const app = express()

// middleware

app.use(express.urlencoded())

app.set('view engine' , 'ejs')

app.get('/' , (req , res) => {
  return res.render('index')
})

app.get("/home" , (req , res) => {
  return res.render('home')
})

app.listen(port  , (err) => {
  !err ? console.log(`server start on port ${port}`):console.log("server not started");
})
