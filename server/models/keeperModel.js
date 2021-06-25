const {getDatabase} = require("../config/mongodb.js")
const {ObjectId, Db} = require ('mongodb')
const cemetaryMaker = require("../helpers/cemetaryMaker")
const collectionKeeper = 'keeper'
const collectionCemetarySpace = "cemetarySpace"

class Keeper{
    static async createKeeper(keeperData){
        if(getDatabase()){
            let cemetary = await cemetaryMaker(keeperData.height, keeperData.width)
            const cemetarySpace = await getDatabase().collection(collectionCemetarySpace).insertOne(cemetary)
            keeperData.cemetarySpaceId = cemetarySpace.ops[0]._id
            return getDatabase().collection(collectionKeeper).insertOne(keeperData)
        }
        else{
            console.log(err);
        }
    }
    static async getAllData(){
        if(getDatabase()){
            return await getDatabase().collection(collectionKeeper).find().toArray()
        }
    }
    static async getById(id){
        if(getDatabase()){
            let keeperData = await getDatabase().collection(collectionKeeper).find({_id:ObjectId(id)}).toArray()
            let cemetarySpaceId = keeperData[0].cemetarySpaceId
            let cemetaryData = await getDatabase().collection(collectionCemetarySpace).find({_id:ObjectId(cemetarySpaceId)}).toArray()
            let fullData = keeperData[0]
            fullData.cemetarySpace = cemetaryData[0]
            return fullData
        }
    }
    static async updateKeeperData(id, keeperData){
        // if(getDatabase()){
        //     // console.log(keeperData);
        //     console.log(id);
        //     return await getDatabase().collection(collectionKeeper).updateOne({_id: ObjectId(id)}, keeperData).toArray()
        // }
    }
}
module.exports = Keeper