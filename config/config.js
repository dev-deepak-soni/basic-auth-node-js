const mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost/login-signup-demo';

mongoose.connect(dbUrl);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database!');
});