import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDB = async() => {
  try{
    let connect = await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log(`MongoDB connected!! ${connect.connection.host}`);
    
  }catch(err){
    console.log("MongoDb Connection Error" , err);
    process.exit(1)
  }
}

export default connectDB