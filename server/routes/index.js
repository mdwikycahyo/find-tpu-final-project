const router = require('express').Router()
const adminRoute = require('./adminRoute')
const keeperRoute = require('./keeperRoute')
const userRoute = require('./userRoute')
const transactionRoute = require('./transactionRoute')
const xenditRoute = require("./xenditRoute")

router.use("/transaction", transactionRoute)
router.use("/user", userRoute)
router.use("/admin", adminRoute)
router.use("/keeper", keeperRoute)
router.use("/xendit", xenditRoute)

module.exports = router