import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username:{
      type:String,
      unique:true,
      require:true
    },
    email:{
      type:String,
      unique:true,
      require:true
    },
    password:{
      type:String,
      require:true
    }
  }
)

export default User = mongoose.model("User" , userSchema)