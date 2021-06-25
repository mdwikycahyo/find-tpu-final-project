const router = require("express").Router()
const keeperController = require("../controllers/keeperController")
// const authentication = require("../middlewares/authentication")
// const auhtorization = require("../middlewares/authorization")

// router.use(authentication)
// router.use(auhtorization)

router.post("/", keeperController.createKeeper)
router.get("/", keeperController.getAllData)
router.get("/:id", keeperController.getById)
router.put("/:id", keeperController.updateKeeperData)

module.exports = router