const bcrypt = require("bcryptjs")

function encode(password){
    let salt = bcrypt.genSaltSync(8)
    return bcrypt.hashSync(password, salt)
}

function decode(password, hashedPassword){
    return bcrypt.compareSync(password, hashedPassword)
}

module.exports = {encode, decode}