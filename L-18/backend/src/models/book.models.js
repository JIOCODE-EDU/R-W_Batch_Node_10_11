import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title:{
    type:String,
    require:true,
    trim:true
  },
  author:{
    type:String,
    require:true,
    trim:true
  },
  price:{
    type:Number,
    require:true,
    min:[0 , 'price must be positive']
  },
  inStock:{
    type:Boolean,
    default:true
  }
} , {timestamps:true})

export const Book = mongoose.model("Book" , bookSchema)

