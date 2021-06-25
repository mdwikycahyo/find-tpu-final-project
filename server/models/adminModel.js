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
                console.log("ERROR");
            }
        }
        catch(err){
            console.log(err);
        }
    }

    static loginAdmin(email){
        try{
            if(getDatabase()){
                return getDatabase().collection(collectionAdmin).findOne({email:email})
            }
            else{
                console.log("here");
            }
        }
        catch(err){
            console.log(err);
        }
    }
}
module.exports = Admin