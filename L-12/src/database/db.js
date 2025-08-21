import mongoose from "mongoose";

const connectDB = async() => {
  try{
    const connectDB = await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log("MongoDB connected!!");
    
  }catch(err){
    console.log("MongoDb Connection Error" , err);
    process.exit(1)
  }
}

export default connectDB