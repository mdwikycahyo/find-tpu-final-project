const jwt = require("jsonwebtoken")

function sign(payload){
    return jwt.sign(payload, "TPU")
}

function verify(token){
    return jwt.verify(token, "TPU")
}

module.exports = {sign, verify}