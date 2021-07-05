const { getDatabase } = require("../config/mongodb");
const {ObjectId, Db} = require ('mongodb')
const collectionTransaction = "transaction"
const collectionKeeper = 'keeper'
const collectionCemetarySpace = "cemetarySpace"



class User{
    static async getTransaction(){
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionTransaction).find().toArray()
            }
        }
        catch(err){
            next({name:"ServerError", message:err})

        }
    }

    static async createTransaction(payload){
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionTransaction).insertOne(payload)
            }
        }
        catch(err){
            next({name:"ServerError", message:err})

        }
    }
    static async getTransactionById(id){
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionTransaction).find({_id:ObjectId(id)}).toArray()
            }
        }
        catch(err){
            next({name:"ServerError", message:err})

        }
    }

    static async getTransactionByCemetaryName(cemetaryName){
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionTransaction).find({cemetaryName}).toArray()
            }
        }
        catch(err){
            next({name:"ServerError", message:err})

        }
    }

    static async getTransactionByCemetaryId(cemetaryId){
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionTransaction).find({cemetaryId}).toArray()
            }
        }
        catch(err){
            next({name:"ServerError", message:err})

        }
    }
    static async getTransactionByDeceasedName(deceasedName){
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionTransaction).find({deceasedName}).toArray()
            }
        }
        catch(err){
            next({name:"ServerError", message:err})

        }
    }

    static async changeStatus(id, status){
        const newStatus = {$set: {status}}
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionTransaction).updateOne({_id:ObjectId(id)}, newStatus)
            }
        }
        catch(err){
            next({name:"ServerError", message:err})

        }
    }
    static async updateTransactionData(id, transactionData){
        const newData = {$set: transactionData}
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionTransaction).updateOne({_id:ObjectId(id)}, newData)
            }
        }
        catch(err){
            next({name:"ServerError", message:err})

        }
    }
    static async deleteTransactionData(id){
        try{
            if(getDatabase()){
                return await getDatabase().collection(collectionTransaction).deleteOne({_id:ObjectId(id)})
            }
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
}

module.exports = User