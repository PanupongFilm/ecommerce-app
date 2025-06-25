import mongoose from 'mongoose';

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("Database connected successfully");

    }catch(error){
        console.error("Database connect failed")
        throw error;
    }
}

export default connectDB;