const {getDatabase} = require("../config/mongodb.js")
const {ObjectId, Db} = require ('mongodb')
const collectionAdmin = 'admin'

class Admin{
    static createAdmin(payload){
        try{
            if(getDatabase()){
                return getDatabase().collection(collectionAdmin).insertOne(payload)
            }
            else{
                next({name:"ServerError", message:"Database not connected "})
            }
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }

    static loginAdmin(email){
        try{
            if(getDatabase()){
                return getDatabase().collection(collectionAdmin).findOne({email:email})
            }
            else{
                next({name:"ServerError", message:"Database not connected "})
            }
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
}
module.exports = Admin