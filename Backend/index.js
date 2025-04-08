import express from 'express';
import cors from 'cors';
import createUser from './Routes/CreateUser.js';
import displayData from './Routes/DisplayData.js';
import OrderData from './Routes/OrderData.js';
import mongoose from 'mongoose';
import connectDB from './db.js'
const app = express();
const port = 5000;

await connectDB();
// Enable CORS for frontend
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Middleware
app.use(express.json());

// Test API Route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// User Signup Route
app.use('/api', createUser);
app.use('/api', displayData);
app.use('/api', OrderData);
// Start Server
app.listen(port, async() => {
    console.log(`Backend running on http://localhost:${port}`);
});
