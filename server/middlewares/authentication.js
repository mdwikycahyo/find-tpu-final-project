const {Admin} = require("../models/adminModel")
const {verify} = require("../helpers/jwt")

async function authentication(req, res, next){
    if(!req.headers.access_token){
        next({name:"Unauthorized", message:"Login First"})
    }
    else{
        let decoded = verify(req.headers.access_token)

        User
        .findByPk(decoded.id)
        .then((data)=>{
            if(data){
                req.user = {
                    id : data.id,
                    email : data.email,
                    role: data.role
                }
                next()
            }
            else{
                next({name:"ResourceNotFound", message:"ID not found"})
            }
        })
        .catch((err)=>{
            next({name:"ServerError", message:err.message})
        })
    }
}

module.exports = authentication