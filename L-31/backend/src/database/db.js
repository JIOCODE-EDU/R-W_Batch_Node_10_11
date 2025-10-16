import mongoose from "mongoose";

export const connectDB = async() => {
  try{
    const connect = await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log(`Host : ${connect.connection.host}`);
    console.log('MongoDB Connected!!!');
    
  }catch(err){
    console.log(err);
  }
}