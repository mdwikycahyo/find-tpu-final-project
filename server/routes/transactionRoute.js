const router = require("express").Router()
const transactionController = require("../controllers/transactionController")

router.post("/", transactionController.createTransaction)
router.get("/", transactionController.getTransaction)
router.get("/:id", transactionController.getTransactionById)
router.post("/cemetary", transactionController.getTransactionByCemetaryName)
router.get("/cemetary/:id", transactionController.getTransactionByCemetaryId)
router.post("/deceased", transactionController.getTransactionByDeceasedName)
router.patch("/changeStatus/:id", transactionController.changeStatus)
router.put("/:id", transactionController.updateTransactionData)
router.delete("/:id", transactionController.deleteTransactionData)

module.exports = router