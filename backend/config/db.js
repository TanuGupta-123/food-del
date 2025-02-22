import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tanugupta11h:63014829@cluster0.ihfpi.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}