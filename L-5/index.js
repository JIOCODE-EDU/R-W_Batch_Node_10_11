import express from 'express'
import dotenv from 'dotenv'

const app = express()

dotenv.config({
  path:'./.env'
})

app.use(express.urlencoded())

app.set('view engine' , 'ejs')

const port = process.env.PORT || 3000

const UserData = []

app.get('/' , (req , res) => {
  return res.render('index')
})
app.get('/home' , (req , res) => {
  return res.render('Home')
})
app.get('/form' , (req , res) => {
  return res.render('form' , {userdata:UserData})
})

app.post('/insertUser' , (req , res) => {
  let id = req.body.userid
  let name = req.body.name
  let email = req.body.email
  let password = req.body.password

  let obj = {
    id:id,
    name:name,
    email:email,
    password:password
  }

  UserData.push(obj)

  console.log("UserData Successfully Added!!");

  console.log(obj);

  return res.redirect('/home')
})

app.get('/editUser' , (req , res) => {
  let userEditId = req.query.id

  let newEditData = UserData.filter((val) => {
    return val.id === userEditId
  })

  return res.render('editUser' , {
    editData:newEditData[0]
  })
})


app.listen(port , (err) => {
  !err ? console.log(`server start on port ${port}`) : null
})

