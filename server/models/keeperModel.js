const {getDatabase} = require("../config/mongodb.js")
const {ObjectId, Db} = require ('mongodb')
const cemetaryMaker = require("../helpers/cemetaryMaker")
const { get } = require("../routes/adminRoute.js")
const e = require("express")
const collectionKeeper = 'keeper'
const collectionCemetarySpace = "cemetarySpace"
const collectionTransaction = "transaction"

class Keeper{
    static async loginKeeper(email){
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionKeeper).findOne({keeperEmail:email})
            }
            else{
                next({name:"ServerError", message:"Database not connected "})
            }
        }
        catch(err){
            next({name:"ServerError", message:err})
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
                next({name:"ServerError", message:"Database not connected "})

            }
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async getAllData(){
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionKeeper).find().toArray()
            }
            else{
                next({name:"ServerError", message:"Database not connected "})
            }
        }
        catch(err){
            next({name:"ServerError", message:err})
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
            }else{
                next({name:"ServerError", message:"Database not connected "})
            }
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    //Masih ERROR ATOMIC
    static async updateKeeperData(id, keeperData){
        const newValues = {$set: keeperData}
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionKeeper).updateOne({_id: ObjectId(id)}, newValues)
            }
            else{
                next({name:"ServerError", message:"Database not connected "})
            }
        }
        catch(err){
            next({name:"ServerError", message:err})
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
            else{
                next({name:"ServerError", message:"Database not connected "})

            }
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async deleteKeeper(id){
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionKeeper).deleteOne({_id:ObjectId(id)})
            }
            else{
                next({name:"ServerError", message:"Database not connected "})
            }
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async getAllPending(cemetaryName){
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionTransaction).find({cemetaryName,status:"pending"}).toArray()
            }
            else{
                next({name:"ServerError", message:"Database not connected "})

            }
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async getAllWaiting(cemetaryName){
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionTransaction).find({cemetaryName,status:"waiting"}).toArray()
            }
            else{
                next({name:"ServerError", message:"Database not connected "})

            }
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async getAllDone(cemetaryName){
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionTransaction).find({cemetaryName,status:"done"}).toArray()
            }
            else{
                next({name:"ServerError", message:"Database not connected "})

            }
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async getAllCanceled(cemetaryName){
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionTransaction).find({cemetaryName,status:"canceled"}).toArray()
            }
            else{
                next({name:"ServerError", message:"Database not connected "})

            }
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async getByStatus(cemetaryId, status){
        console.log(cemetaryId);
        console.log(status);
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionTransaction).find({cemetaryId,status:status}).toArray()
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
module.exports = Keeper