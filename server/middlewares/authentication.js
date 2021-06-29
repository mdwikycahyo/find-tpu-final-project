const { decode } = require("jsonwebtoken")
const {verify} = require("../helpers/jwt")
const Keeper = require("../models/keeperModel")

async function authentication(req, res, next){
    if(!req.headers.access_token){
        next({name:"Unauthorized", message:"Login first"})
    }
    else{
        try{
            let decoded = verify(req.headers.access_token)
            if(decoded.email === "admin@gmail.com"){
                req.user = {
                    email: decoded.email,
                    id: decoded.id,
                    role: decoded.role
                }
                next()
            }
            else{
                const data = await Keeper.getById(decoded.id)
                if(data){
                    req.user = {
                        id: decoded.id,
                        email: decoded.email,
                        role: "keeper"
                    }
                    next()
                }
                else{
                    next({name:"ResourceNotFound", message:"Data not found"})
                }
            }
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
}

module.exports = authentication