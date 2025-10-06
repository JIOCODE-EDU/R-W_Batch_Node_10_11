import express from 'express'
import { createStudent , getStudentById , getStudents , updateStudent , deleteStudent } from '../controllers/student.controllers.js'
import { register , login } from '../controllers/auth.controllers.js'

const router = express.Router()

router.post("/" , createStudent)
router.get("/" , getStudents)
router.get("/:id" , getStudentById)
router.put("/:id" , updateStudent)
router.delete("/:id" , deleteStudent)


export default router