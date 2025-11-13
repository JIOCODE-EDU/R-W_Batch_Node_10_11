import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
  originalName:{type:String , required:true},
  url:{type:String , required:true},
  public_id:{type:String , required:true},
  format:String,
  size:Number,
  uplodedBy:String
} , {timestamps:true})

export default mongoose.model("File" , FileSchema)