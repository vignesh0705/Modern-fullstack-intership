import mongoose from "mongoose";

export let connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected sucessfully");
    }catch(error){
        console.log("Error"+error);
    }
}