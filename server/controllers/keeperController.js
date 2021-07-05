const Keeper = require("../models/keeperModel")
const {decode, encode} = require("../helpers/bcrypt")
const { sign } = require("../helpers/jwt")

class KeeperController{
    static async loginKeeper(req, res, next){
        try{
            const email =  req.body.email
            const password =  req.body.password
            if(!email && !password){
                next({name:"BadRequest", message:"required email or password"})
            }
            const keeperData = await Keeper.loginKeeper(email)
            if(keeperData){
                if(decode(password, keeperData.keeperPassword)){
                    const payload = {
                        email: keeperData.keeperEmail,
                        id: String(keeperData._id),
                        role: "keeper"
                    }
                    const access_token = sign(payload)
                    res.status(200).json({access_token, id: keeperData._id})
                }
                else{
                    next({name:"Unauthorized", message:"Invalid password"})
                }
            }
            else{
                next({name:"Unauthorized", message:"Invalid email"})
            }
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }

     static async createKeeper(req, res, next){
         try{
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
            keeperData.keeperPassword = await encode(keeperData.keeperPassword)
            const addedData = await Keeper.createKeeper(keeperData)
            res.status(201).json(addedData.ops[0])
        }
        catch(err){
            next({name:"ServerError", message:err})
        }

    }
    static async getAllData(req, res, next){
        try{
            const allKeeperData = await Keeper.getAllData()
            res.status(200).json(allKeeperData)
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async getById(req, res, next){
        try{
            const id = req.params.id
            if(!id){
                next({name:"BadRequest", message:"params id required"})
            }
            const keeperData = await Keeper.getById(id)
            if(keeperData){
                res.status(200).json(keeperData)
            }
            else{
                next({name:"ResourceNotFound", message:"Data not found"})
            }
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }

    static async updateKeeperData(req, res, next){
        try{
            const id = req.params.id
            if(!id){
                next({name:"BadRequest", message:"params id required"})
            }
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
                // keeperEmail: req.body.keeperEmail,
                // keeperPassword: req.body.keeperPassword,
                keeperPhone: req.body.keeperPhone,
                spaceLeft: req.body.spaceLeft,
                spaceFilled: req.body.spaceFilled,
                facilities: req.body.facilities
            }
            keeperData.keeperPassword = await encode(keeperData.keeperPassword)
            const updatedData = await Keeper.updateKeeperData(id, keeperData)
            res.status(201).json({"message": "Data updated"})
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async updateCemetarySpace(req, res, next){
        try{
            const id = req.params.id
            const cemetaryPayload = {
                cemetarySpaceId : req.body.cemetarySpaceId,
                position : req.body.position
            }
            if(!id){
                next({name:"BadRequest", message:"params id required"})
            }
            if(!cemetaryPayload){
                next({name:"BadRequest", message:"body cemetary payload are required"})
            }
            const updateCemetarySpace = await Keeper.updateCemetarySpace(id, cemetaryPayload)
            res.status(200).json({message: "Cemetary spaced filled"})
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async deleteKeeper(req, res, next){
        try{
            const id = req.params.id
            if(!id){
                next({name:"BadRequest", message:"params id required"})
            }
            await Keeper.deleteKeeper(id)
            res.status(200).json({message: "Keeper has been deleted"})
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }

    static async getAllPending(req, res, next){
        const cemetaryName = req.body.cemetaryName
        if(!cemetaryName){
            next({name:"BadRequest", message:"params id required"})
        }
        try{
            const cemetaryData = await Keeper.getAllPending(cemetaryName)
            res.status(200).json(cemetaryData)
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async getAllWaiting(req, res, next){
        const cemetaryName = req.body.cemetaryName
        if(!cemetaryName){
            next({name:"BadRequest", message:"params id required"})
        }
        try{
            const cemetaryData = await Keeper.getAllWaiting(cemetaryName)
            res.status(200).json(cemetaryData)
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async getAllDone(req, res, next){
        const cemetaryName = req.body.cemetaryName
        if(!cemetaryName){
            next({name:"BadRequest", message:"params id required"})
        }
        try{
            const cemetaryData = await Keeper.getAllDone(cemetaryName)
            res.status(200).json(cemetaryData)
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async getAllCanceled(req, res, next){
        const cemetaryName = req.body.cemetaryName
        try{
            const cemetaryData = await Keeper.getAllCanceled(cemetaryName)
            res.status(200).json(cemetaryData)
        }
        catch(err){
            console.log(err);
        }
    }


    static async getByStatus(req, res, next){
        const cemetaryId = req.body.cemetaryId
        const status = req.body.status
        if(!cemetaryId){
            next({name:"BadRequest", message:"cemetary id required"})
        }
        if(!status){
            next({name:"BadRequest", message:"status required"})
        }
        try{
            const cemetaryData = await Keeper.getByStatus(cemetaryId, status)
            res.status(200).json(cemetaryData)
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }

    static async changeStatus(req, res, next){
        const status = req.body.status
        const id = req.params.id
        console.log(status);
        try{
            
        }
        catch(err){
            console.log(err);
        }
    }
}

module.exports = KeeperController