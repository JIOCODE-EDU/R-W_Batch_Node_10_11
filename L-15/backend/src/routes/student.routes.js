import express from 'express'
import { Router } from 'express'
import { createStudent , getStudentById , getStudent , updateStudent , deleteStudent } from '../controllers/student.controller.js'

const router = express.Router()

router.post("/" , createStudent)
router.get("/" , getStudent)
router.get("/:id" , getStudentById)
router.put("/:id" , updateStudent)
router.delete("/:id" , deleteStudent)

export default router