const { signUp } = require("../models/signUpModel");

exports.signUp = async (req, res) => {
    const { email, password, firstName, lastName, age, address } = req.body;
    const postData = {
        email,
        password,
        firstName,
        lastName,
        age,
        address
    };

    try {

        const result = await signUp(postData);
        res.status(result.status).json(result);

    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: `Server error : ${error.message}`
        });
    }
}