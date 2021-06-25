const router = require("express").Router()
const userController = require("../controllers/userController")

router.post("/nearby", userController.getNearby)
router.post("/searchLocation", userController.getSearchLocation)

module.exports = router