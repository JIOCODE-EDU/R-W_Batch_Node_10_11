const http = require('http')

const port = 5050 || 9090

const server = http.createServer((req , res) => {
  res.end("Hello User!")
})

server.listen(port , (err) => {
  !err ? console.log(`server start on port ${port}`) : null
})