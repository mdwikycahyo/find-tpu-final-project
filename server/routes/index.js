const router = require('express').Router()
const adminRoute = require('./adminRoute')
const keeperRoute = require('./keeperRoute')
// const userRoute = require('./userRoute')

// router.use("/user", userRoute)
router.use("/admin", adminRoute)
router.use("/keeper", keeperRoute)

module.exports = router