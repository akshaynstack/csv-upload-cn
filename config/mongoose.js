require('dotenv').config(); // Load .env file

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.once('open', function(){
    console.log('Successfully connected to DB!');
});

module.exports = db;