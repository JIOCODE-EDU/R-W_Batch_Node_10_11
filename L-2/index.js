const http = require('http')
const fs = require('fs')
const port = 5050 || 3000

const fileRequest = (req , res) => {
  let filename = ""
  switch(req.url){
    case '/' : filename = './index.html'
    case '/home' :filename= './home.html'
  }

  fs.readFile(filename , (err , result) => {
    if(!err){
      res.end(result)
    }
  })
}

const server = http.createServer(fileRequest)

server.listen(port , (err) => {
  !err ? console.log(`server start on port ${port}`) : console.log('server not started');
})

