const User = require("../schema/User")


exports.login = async (postData) => {
    console.log('postData', postData);

    const getUser = await User.findOne(postData);
    console.log('getUser',getUser);

    return {
        status : 200,
        success : true,
        data : 'data',
        message : 'Hello this is test message'
    }
}