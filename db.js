const mongoose = require('mongoose');
require('dotenv').config();
const mongoDbURL = process.env.MONGO_URL;

mongoose.connect(mongoDbURL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB connection established successfully');
});

db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB connection disconnected');
});


module.exports = db;