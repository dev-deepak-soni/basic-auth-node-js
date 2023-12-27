const express = require('express');
const app = express();
const env = require('dotenv');
// var bodyParser = require('body-parser')
require('./config/config')

//use env scope
env.config();
app.use(express.json())

//get PORT from env file
const PORT = process.env.PORT;


// include routes files and use
const login = require('./routes/loginRoutes')
const signUp = require('./routes/signUpRoutes')

//use routes
app.use('/login', login);
app.use('/signUp', signUp);

// run http with local server
app.listen(PORT, () => {
    console.log(`Server Listening On Port ${PORT}`);
})
