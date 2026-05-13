const mongoose = require('mongoose');
// Define the schema for the Person model
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],// Example of predefined roles
        required: true
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    }
});
// Create the Person model using the schema
const Person = mongoose.model('Person', personSchema);
module.exports = Person;