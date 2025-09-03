import express from 'express'
import { Router } from 'express'
import { createStudent , getStudentById , getStudent , updateStudent , deleteStudent } from '../controllers/student.controller.js'

const router = express.Router()

Router.post("/" , createStudent)
Router.get("/" , getStudent)
Router.get("/:id" , getStudentById)
Router.put("/:id" , updateStudent)
Router.delete("/:id" , deleteStudent)