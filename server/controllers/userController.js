const axios = require("axios")
const radius = "1500"
const keyword = "pemakaman"
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
            console.log(err);
        }
    }
    static async getSearchLocation(req, res, next){
        const location = req.body.location
        try{
            let data = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location},${keyword}&key=${api_key}`)
            res.status(200).json(data.data.results)
        }
        catch(err){
            console.log(err);
        }
    }
}

module.exports = UserController