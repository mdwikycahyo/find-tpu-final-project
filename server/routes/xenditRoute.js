const router = require("express").Router()
const xenditController = require("../controllers/xenditController")

router.post("/createVA", xenditController.createVA)
router.post("/createInvoice", xenditController.createdInvoice)

module.exports = router