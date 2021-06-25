const {getDatabase} = require("../config/mongodb.js")
const {ObjectId, Db} = require ('mongodb')
const collectionName = 'keeper'

class Keeper{
    static createKeeper(payload){
        if(getDatabase()){
            return getDatabase().collection(collectionName).insertOne(payload)
        }
    }
}
module.exports = Keeper