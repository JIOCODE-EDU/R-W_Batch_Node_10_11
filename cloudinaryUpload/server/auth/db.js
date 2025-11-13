import mongoose from "mongoose";

const connectDB = async() => {
  try{
    const connect = await mongoose.connect(process.env.MONGODB_URI)
    console.log('MongoDb Connection Successfully!' , connect.connection.host);
    
  }catch(err){
    console.log('MongoDB connection Failed!');
    process.exit(1)
  }
}

export default connectDB