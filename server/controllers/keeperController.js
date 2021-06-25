const Keeper = require("../models/keeperModel")
const {decode, encode} = require("../helpers/bcrypt")

class keeperController{
     static async createKeeper(req, res, next){
        let keeperData = {
            cemetaryName: req.body.cemetaryName,
            cemetaryLocation: req.body.cemetaryLocation,
            width: req.body.width,
            height: req.body.height,
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
            keeperData.keeperPassword = await encode(keeperData.keeperPassword)
            const addedData = await Keeper.createKeeper(keeperData)
            res.status(201).json(addedData.ops[0])
        }
        catch(err){
            console.log(err)
        }

    }
    static async getAllData(req, res, next){
        try{
            const allKeeperData = await Keeper.getAllData()
            res.status(200).json(allKeeperData)
        }
        catch(err){
            console.log(err);
        }
    }
    static async getById(req, res, next){
        const id = req.params.id
        try{
            const keeperData = await Keeper.getById(id)
            res.status(200).json(keeperData)
        }
        catch(err){
            console.log(err);
        }
    }
    static async updateKeeperData(req, res, next){
        const id = req.params.id
        let keeperData = {
            cemetaryName: req.body.cemetaryName,
            cemetaryLocation: req.body.cemetaryLocation,
            width: req.body.width,
            height: req.body.height,
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
            keeperData.keeperPassword = await encode(keeperData.keeperPassword)
            const updatedData = await Keeper.updateKeeperData(id, keeperData)
            // res.status(201).json(updatedData.ops[0])
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = keeperController