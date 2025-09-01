let express = require ('express')
import fs from 'fs'
import http from 'http'

const app = express()

const port = 3000

const request = (req , res) => {
  let filename = "";

  switch(req.url){
    case '/' : filename = "./src/pages/index.html"
    break
    case '/home' : filename = "./src/pages/Home.html"
    break
  }

  fs.readFile(filename , (err , result) => {
    if(!err){
      res.end(result)
    }
  })
}

const server = http.createServer(request)

server.listen(port , (err) => {
  !err ? console.log(`server has been start in port ${port}`) : console.log("server not start");
})


########################################

let express = require ('express')
let path = require ('path')

const app = express()

const port = 3000

app.get('/' , (req , res) => {
  res.sendFile(path.join(__dirname , "public/index.html"))
})

app.get('/home' , (req , res) =>{
  res.sendFile(path.join(__dirname , './src/pages/Home.html'))
})

app.listen(port , (err) => {
  !err ? console.log(`server has been start in port ${port}`) : console.log("server not start");
})