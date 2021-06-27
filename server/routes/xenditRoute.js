const router = require("express").Router()
const xenditController = require("../controllers/xenditController")

router.post("/createVA", xenditController.createVA)

module.exports = router