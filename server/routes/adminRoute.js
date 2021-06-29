const router = require("express").Router()
const adminController = require("../controllers/adminController")
const keeperController = require("../controllers/keeperController")
const authentication = require("../middlewares/authentication")
const authorizationAdmin = require("../middlewares/authorizationAdmin")
const { route } = require("./keeperRoute")


router.post("/register", adminController.registerAdmin)
router.post("/login", adminController.loginAdmin)

router.use(authentication)
router.use(authorizationAdmin)

router.post("/", keeperController.createKeeper)
router.get("/", keeperController.getAllData)
router.get("/:id", keeperController.getById)
router.put("/:id", keeperController.updateKeeperData)
router.patch("/:id", keeperController.updateCemetarySpace)
router.delete("/:id", keeperController.deleteKeeper)

module.exports = router