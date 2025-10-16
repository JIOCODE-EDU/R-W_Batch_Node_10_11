import express from 'express'
import connectDB from './src/database/db.js'
import session from 'express-session'
import passport from 'passport'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import './src/auth/passport.js'
import authRouter from './src/routes/auth.routes.js'
import env from 'dotenv'

// config

env.config({
  path:'./.env'
})

// middlewares

const app = express()

app.use(helmet())
app.use(morgan('dev'))
app.use(cors({
  origin:'*',
  credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(session(
  {
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{secure:false , maxAge:24*60*60*1000}
  }
))

app.use(passport.initialize())
app.use(passport.session())

// routes

app.use('/auth' , authRouter)

connectDB();

const PORT = process.env.PORT || 3000

app.listen(PORT , () => {
  console.log(`Server running on port ${PORT} `);
})




