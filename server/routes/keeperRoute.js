const router = require("express").Router()
const keeperController = require("../controllers/keeperController")
const authentication = require("../middlewares/authentication")
const authorizationKeeper = require("../middlewares/authorizationKeeper")

// router.use(auhtorization)

router.post("/login", keeperController.loginKeeper)

router.use(authentication)
router.use(authorizationKeeper)

router.put("/:id", keeperController.updateKeeperData)
router.post("/status/pending", keeperController.getAllPending)
router.post("/status/", keeperController.getByStatus)
router.patch("/status/:id", keeperController.changeStatus)


module.exports = router