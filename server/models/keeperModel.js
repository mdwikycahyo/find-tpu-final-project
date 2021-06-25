const {getDatabase} = require("../config/mongodb.js")
const {ObjectId, Db} = require ('mongodb')
const cemetaryMaker = require("../helpers/cemetaryMaker")
const { get } = require("../routes/adminRoute.js")
const collectionKeeper = 'keeper'
const collectionCemetarySpace = "cemetarySpace"

class Keeper{
    static async loginKeeper(email){
        try{
            if(getDatabase()){
                console.log(email);
                return await getDatabase().collection(collectionKeeper).findOne({keeperEmail:email})

            }
        }
        catch(err){
            console.log(err);
        }
    }
    static async createKeeper(keeperData){
        try{
            if(getDatabase()){
                let cemetary = await cemetaryMaker(keeperData.height, keeperData.width)
                const cemetarySpace = await getDatabase().collection(collectionCemetarySpace).insertOne(cemetary)
                keeperData.cemetarySpaceId = cemetarySpace.ops[0]._id
                return await getDatabase().collection(collectionKeeper).insertOne(keeperData)
            }
            else{
                console.log(err);
            }
        }
        catch(err){
            console.log(err);
        }
    }
    static async getAllData(){
        if(getDatabase()){
            return await getDatabase().collection(collectionKeeper).find().toArray()
        }
    }
    static async getById(id){
        try{
            if(getDatabase()){
                let keeperData = await getDatabase().collection(collectionKeeper).find({_id:ObjectId(id)}).toArray()
                let cemetarySpaceId = keeperData[0].cemetarySpaceId
                let cemetaryData = await getDatabase().collection(collectionCemetarySpace).find({_id:ObjectId(cemetarySpaceId)}).toArray()
                let fullData = keeperData[0]
                fullData.cemetarySpace = cemetaryData[0]
                return fullData
            }
        }
        catch(err){
            console.log(err);
        }
    }
    //Masih ERROR ATOMIC
    static async updateKeeperData(id, keeperData){
        const newValues = {$set: keeperData}
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionKeeper).updateOne({_id: ObjectId(id)}, newValues)
            }
        }
        catch(err){
            console.log(err);
        }
    }
    static async updateCemetarySpace(id, cemetaryPayload){
        const cemetarySpaceId = cemetaryPayload.cemetarySpaceId
        const row = cemetaryPayload.position[0]
        const column = cemetaryPayload.position[1]
        try{
            if(getDatabase()){
                let cemetaryData =  await getDatabase().collection(collectionKeeper).find({_id:ObjectId(id)}).toArray()
                let cemetarySpaceData = await getDatabase().collection(collectionCemetarySpace).find({_id:ObjectId(cemetarySpaceId)}).toArray()
                cemetaryData[0].spaceLeft--
                cemetaryData[0].spaceFilled++
                cemetarySpaceData[0][row-1][column-1] = "x"
                const newCemetaryData = {$set: cemetaryData[0]}
                const newCemetarySpaceData = {$set: cemetarySpaceData[0]}
                await getDatabase().collection(collectionKeeper).updateOne({_id:ObjectId(id)}, newCemetaryData)
                await getDatabase().collection(collectionCemetarySpace).updateOne({_id:ObjectId(cemetarySpaceId)}, newCemetarySpaceData)
                return ""
            }
        }
        catch(err){
            console.log(err);
        }
    }
    static async deleteKeeper(id){
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionKeeper).deleteOne({_id:ObjectId(id)})
            }
        }
        catch(err){
            console.log(err);
        }
    }
}
module.exports = Keeper