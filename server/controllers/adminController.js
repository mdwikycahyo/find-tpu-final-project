const Admin = require('../models/adminModel')
const {encode, decode} = require('../helpers/bcrypt')
const {sign} = require("../helpers/jwt")


//BELUM VALIDASI
class AdminController{
    static async registerAdmin(req, res, next){
        let adminData = {
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }
        try{
            adminData.password = await encode(adminData.password)
            const addedData = await Admin.createAdmin(adminData)
            res.status(201).json(addedData)
        }
        catch(err){
            console.log(err);
        }

    }

    static async loginAdmin(req, res, next){
        const email = req.body.email
        const password = req.body.password
        try{
            const adminData = await Admin.loginAdmin(email)
            if(adminData === null){
                console.log("Not Found");
            }
            else if(decode(password, adminData.password)) {
                console.log("Wrong password");
            }
            else{
                let payload = {
                    _id: adminData._id,
                    email: adminData.email,
                    role: adminData.role
                }
                let access_token = sign(payload)
                res.status(200).json({access_token})
            }
        }
        catch(err){
            console.log(err);
        }

    }
}

module.exports = AdminController