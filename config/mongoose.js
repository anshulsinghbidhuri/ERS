const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost/ers_Anshul1");

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error in connecting to Mongodb"));

db.once('open',function(){
    console.log('Connected to database :: MongoDB');
});

module.exports = db;