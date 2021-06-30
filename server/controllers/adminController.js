const Admin = require('../models/adminModel')
const {encode, decode} = require('../helpers/bcrypt')
const {sign} = require("../helpers/jwt")


//BELUM VALIDASI
class AdminController{
    static async registerAdmin(req, res, next){
        try{
            let adminData = {
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            }
            adminData.password = await encode(adminData.password)
            const addedData = await Admin.createAdmin(adminData)
            res.status(201).json(addedData.ops[0])
        }
        catch(err){
            next({name:"ServerError", message:err})
        }

    }

    static async loginAdmin(req, res, next){
        const email = req.body.email
        const password = req.body.password
        try{
            const adminData = await Admin.loginAdmin(email)
            if(adminData === null){
                next({name:"ResourceNotFound", message:"Invalid email or password"})
            }
            else if(!decode(password, adminData.password)) {
                console.log(decode(password, adminData.password));
                next({name:"Unauthorized", message:"Invalid email or password"})

            }
            else{
                let payload = {
                    id: adminData._id,
                    email: adminData.email,
                    role: adminData.role
                }
                let access_token = sign(payload)
                res.status(200).json({access_token})
            }
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    
}

module.exports = AdminController