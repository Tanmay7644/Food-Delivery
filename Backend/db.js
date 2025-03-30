import mongoose from "mongoose";
const uri='mongodb://localhost:27017/FoodDelivery';
const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected successfully");


        // Reading and parsing the data from the JSON file
        const fetchedData=await mongoose.connection.db.collection('Food').find({}).toArray();
        // console.log("Fetched Data:", fetchedData);


    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}


export default connectDB();