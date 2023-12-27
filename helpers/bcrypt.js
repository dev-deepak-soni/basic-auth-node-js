var bcrypt = require('bcrypt');

const hashAndSalt = async (password, round = 10) => {

    const salt = await bcrypt.genSalt(round);
    const hash = await bcrypt.hash(password, salt);

    return { salt, hash }
}


const compareHash = async (password, hash) => {
    return await bcrypt.compare(password , hash); 
} 

module.exports = {hashAndSalt, compareHash}