import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name:{type:String , require:true},
  email:{type:String , require:true , unique:true},
  course:{type:String , require:true},
  age:{type:Number , require:true}
} , {timestamps:true})

export const Student = mongoose.model("Student" , studentSchema)

