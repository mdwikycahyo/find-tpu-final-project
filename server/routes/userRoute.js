const router = require("express").Router()
const userController = require("../controllers/userController")

router.post("/nearby", userController.getNearby)
router.post("/searchLocation", userController.getSearchLocation)
router.post("/getCemetary", userController.getCemetaryData)
router.get("/:id", userController.getCemetaryById)

module.exports = router