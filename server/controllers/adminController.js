const Admin = require('../models/adminModel')

class AdminController{
    static async loginAdmin(req, res, next){
        const email = req.body.email
        const password = req.body.password
        try{
            const adminData = await Admin.loginAdmin(email)
            if(adminData === null){
                console.log(err);
            }
        }
        catch(err){
            console.log(err);
        }

    }
}

module.exports = AdminController