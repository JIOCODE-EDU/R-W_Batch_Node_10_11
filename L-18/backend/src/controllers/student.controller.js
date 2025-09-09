import { Student } from "../models/Student.models.js";

export const createStudent = async( req , res) => {
  try{
    const student = new Student(req.body)
    await student.save()
    res.status(201).json(student)
  }catch(err){
    res.status(400).json({error:err.message})
  }
}

export const getStudent = async(req  , res) => {
  try{
    const students = await Student.find();
    res.json(students)
  }catch(err){
    res.status(500).json({error:err.message})
  }
}

export const getStudentById = async(req , res) => {
  try{  
    const student = await Student.findById(req.params.id)
    res.json(student)
  }catch(err){
    res.status(500).json({error:err.message})
  }
}

export const updateStudent = async(req , res) => {
  try{
    await Student.findByIdAndUpdate(req.params.id)
    res.json({message:"Student Update Successfully!"})
  }catch(err){
    res.status(500).json({error:err.message})
  }
}

export const deleteStudent = async(req , res) => {
  try{
    await Student.findByIdAndDelete(req.params.id)
    res.json({message:"student delete successfully!"})
  }catch(err){
    res.status(500).json({error:err.message})
  }
}



