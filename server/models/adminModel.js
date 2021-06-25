const {getDatabase} = require("../config/mongodb.js")
const {ObjectId, Db} = require ('mongodb')
const collectionName = 'admin'

class Admin{
    static loginAdmin(email){
        if(getDatabase()){
            return getDatabase().collection(collectionName).findOne({email:email})
        }
        else{
            console.log("here");
        }
    }
}
module.exports = Admin