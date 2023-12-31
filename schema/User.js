const mongoose = require('mongoose');

const User = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {type: String, required:true, unique: true},
    password: {type: String, required:true},
    age: {type: Number, required:true},
    address: {type: String, required:true}
})

module.exports = mongoose.model('User', User);