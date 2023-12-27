const { hashAndSalt } = require("../helpers/bcrypt");
const User = require("../schema/User");


exports.signUp = async (postData) => {

    try {

        const encryptedPass = await hashAndSalt(postData.password);

        postData.password = encryptedPass.hash;

        const newUser = new User(postData);

        // Save the user to the database
        const savedUser = await newUser.save();
        const userObject = savedUser.toObject();
        delete userObject.password;

        return {
            status: 200,
            success: true,
            data: userObject,
            message: 'User signed up successfully.'
        }
    } catch (error) {
        return {
            status: 500,
            success: false,
            data: {},
            message: 'Server Error Occurred'
        }
    }
}