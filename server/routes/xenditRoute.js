const router = require("express").Router()
const xenditController = require("../controllers/xenditController")

router.post("/createVA", xenditController.createVA)
router.post("/createInvoice", xenditController.createdInvoice)
router.get("/:id", xenditController.getInvoice)

module.exports = router