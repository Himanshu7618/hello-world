const mongoose = require('mongoose');
// Define the schema for the Menu model
const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['sweet', 'sour', 'spicy'], // Example of predefined taste categories
        required: true
    },
    is_drink: {
        type: Boolean,
        required: false
    },
    ingredients: {
        type: [String], // Array of strings to list ingredients
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    }
});
// Create the MenuItem model using the schema
const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;