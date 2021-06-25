const Keeper = require("../models/keeperModel")
const {decode, encode} = require("../helpers/bcrypt")

class keeperController{
     static async createKeeper(req, res, next){
        let keeperData = {
            cemetaryName: req.body.cemetaryName,
            cemetaryLocation: req.body.cemetaryLocation,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            image_url: req.body.image_url,
            price: req.body.price,
            keeperName: req.body.keeperName,
            keeperEmail: req.body.keeperEmail,
            keeperPassword: req.body.keeperPassword,
            keeperPhone: req.body.keeperPhone,
            spaceLeft: req.body.spaceLeft,
            spaceFilled: req.body.spaceFilled,
            facilities: req.body.facilities
        }
        try{
            keeperData.password = await encode(keeperData.password)
            const addedData = await Keeper.createKeeper(keeperData)
        }
        catch(err){
            console.log(err)
        }

    }
}

module.exports = keeperController