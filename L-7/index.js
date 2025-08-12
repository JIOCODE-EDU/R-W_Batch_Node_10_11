import express from 'express'
import dotenv from 'dotenv'

const app = express()

dotenv.config({
  path:'./.env'
})

app.use(express.urlencoded())

app.set('view engine' , 'ejs')

const port = process.env.PORT || 3000

let UserData = []

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

  return res.redirect('/form')
})

app.get('/editData' , (req , res) => {
  let userEditId = req.query.id

  let newEditData = UserData.filter((val) => {
    return val.id === userEditId
  })

  return res.render('editUser' , {
    editData:newEditData[0]
  })
})

app.post('/editUser', (req , res) => {
  let editId = req.body.editId

  // editId = parseInt(editId)

  UserData = UserData.map((user) => {
    if(user.id === editId){
      user.name = req.body.name
      user.email = req.body.email
      user.password = req.body.password
    }
    return user
  })

  console.log("updated user" , editId);

  return res.redirect('/form')
  
})

app.get('/deleteData' , (req , res) =>{
  let userDeleteId = req.query.id

  console.log(userDeleteId);
  
  let newDeleteData = UserData.filter((val) => {
    return val.id != userDeleteId
  })

  UserData = newDeleteData

  return res.redirect('/form')
})

app.listen(port , (err) => {
  !err ? console.log(`server start on port ${port}`) : null
})

