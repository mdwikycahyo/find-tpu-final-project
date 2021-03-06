const axios = require("axios")
const radius = "1500"
const keyword = "pemakaman"
const User = require("../models/userModel")
const Keeper = require("../models/keeperModel")
const sortedData = require("../helpers/sortedCemetaryData")

let api_key = "AIzaSyAhyFZadPdRIomY26veQj5j2_ztUz9G-Qw"


class UserController{
    static async getNearby(req, res, next){
        const latitude = req.body.latitude
        const longitude = req.body.longitude
        try{
            const data = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&keyword=${keyword}&key=${api_key}`)
            res.status(200).json(data.data.results)
        }
        catch(err){
            next({name:"ServerError", message:err})

        }
    }
    static async getSearchLocation(req, res, next){
        const location = req.body.location
        try{
            let data = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location},${keyword}&key=${api_key}`)
            res.status(200).json(data.data.results)
        }
        catch(err){
            next({name:"ServerError", message:err})

        }
    }
    static async getCemetaryData (req, res, next) {
        const locationName = req.body.locationName
        try{
            const cemetarySpaceData = await User.getCemetaryData(locationName)
            const sortedCemetaryData = sortedData(cemetarySpaceData)
            res.status(200).json(sortedCemetaryData)
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
    static async getCemetaryById(req, res, next){
        const id = req.params.id
        try{
            const cemetaryData = await Keeper.getById(id)
            const data = sortedData(cemetaryData)
            res.status(200).json(data)
        }
        catch(err){
            next({name:"ServerError", message:err})
        }
    }
}

module.exports = UserController