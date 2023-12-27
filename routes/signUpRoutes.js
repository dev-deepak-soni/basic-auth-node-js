const express = require('express'); 
const { signUp } = require('../controllers/signUpController');
const router =  express.Router();

router.get('/', signUp);

module.exports = router;