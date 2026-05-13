const mongoose = require('mongoose');

const mongoDbURL = 'mongodb+srv://hc5589414_db_user:magXhPIvBZxzc0SQ@cluster.f9odl8t.mongodb.net/hotel?retryWrites=true&w=majority&appName=Cluster';

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