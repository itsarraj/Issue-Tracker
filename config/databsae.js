const mongoose = require('mongoose');

//Set up default mongoose
const mongoDB = process.env.MONGOURI;

mongoose.connect(mongoDB, { useNewUrlParser: true });
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//
db.once('open', function () {
    console.log('MongoDB :: connection open');
});

module.exports = db;
