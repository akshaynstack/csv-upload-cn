const mongoose = require('mongoose');





mongoose.connect(process.env.DB_CONNECT);

const db = mongoose.connection;

db.once('open', function(){
    console.log('Successfully connected to DB!');
});

module.exports = db;
