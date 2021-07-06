const router = require("express").Router();
const adminController = require("../controllers/adminController");
// const authentication = require("../middlewares/authentication")
// const auhtorization = require("../middlewares/authorization")

// router.use(authentication)
// router.use(auhtorization)

router.post("/login", adminController.loginAdmin);
// router.post("/register", adminController.registerAdmin)

module.exports = router;
