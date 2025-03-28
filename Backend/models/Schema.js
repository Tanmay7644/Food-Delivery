import mongoose from 'mongoose';

const foodItemSchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    options: [
        {
            half: {
                type: String,
                required: false,
            },
            full: {
                type: String,
                required: false,
            },
        },
    ],
    description: {
        type: String,
        required: true,
    },
});

// Use ES module export
export const foodItem = mongoose.model('FoodItem', foodItemSchema);