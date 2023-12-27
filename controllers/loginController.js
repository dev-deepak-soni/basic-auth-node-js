const { login } = require("../models/loginModel");

exports.login = async (req, res) => {
    const {email, password} = req.body;
    const getUser = await login({email,password});
    res.status(getUser.status).json(getUser);
}