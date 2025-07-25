import mongoose from "mongoose";

export const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.DB_URI);
    console.log("✅ Database connected");
    }catch(error){
        console.log("❌ ~ dbConnection ~ error:", error.message)
    }
}