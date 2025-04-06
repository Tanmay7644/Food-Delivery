import mongoose from "mongoose";
const uri='mongodb://localhost:27017/FoodDelivery';
const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected successfully");


        // Reading and parsing the data from the JSON file
        
        const fetchedData =await mongoose.connection.db.collection('Food').find({}).toArray();
        const fetchedCategory =await mongoose.connection.db.collection('FoodCategory').find({}).toArray();

        global.foodItems=fetchedData;
        global.foodCategory=fetchedCategory;
        // console.log(global.foodItems); 
        // console.log(global.foodCategory);
        console.log("Data fetched successfully");

    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}


export default connectDB;