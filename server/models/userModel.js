const { getDatabase } = require("../config/mongodb");
const {ObjectId, Db} = require ('mongodb')
const collectionKeeper = 'keeper'
const collectionCemetarySpace = "cemetarySpace"



class User{
    static async getCemetaryData(locationName){
        try{
            if(getDatabase()){
                let locationData = await getDatabase().collection(collectionKeeper).findOne({cemetaryName:locationName})
                let cemetarySpace = await getDatabase().collection(collectionCemetarySpace).findOne({_id: ObjectId(locationData.cemetarySpaceId)})
                locationData.cemetarySpace = cemetarySpace
                return locationData
            }
        }
        catch(err){
            console.log(err);
        }
    }
}

module.exports = User