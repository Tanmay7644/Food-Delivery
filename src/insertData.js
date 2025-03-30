import { MongoClient } from "mongodb";
import fs from "fs";

const uri='mongodb://localhost:27017/';
const client = new MongoClient(uri);

async function insertData() { 
    try{
        await client.connect();
        const database=client.db('FoodDelivery');
        const collection1=database.collection('Food');
        const collection2=database.collection('FoodCategory');

        // Clear existing data

        await collection1.deleteMany({});
        await collection2.deleteMany({});


        // Reading and parsing the data from the JSON file
        const foodCategoryData=JSON.parse(await fs.readFileSync('./src/data/foodCategory.json','utf-8'));
        const foodData=JSON.parse(await fs.readFileSync('./src/data/foodData2.json','utf-8'));


        await collection2.insertMany(foodCategoryData);
        await collection1.insertMany(foodData);
        console.log('Data inserted successfully');
    }
    catch(error){
        console.log("Catch block")
        console.error('Error inserting data:', error);
    }
    finally
    {
        console.log("final block");
        await client.close();
    }
}

insertData();