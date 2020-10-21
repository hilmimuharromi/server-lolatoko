const express = require('express')
const router = express.Router()
import product from "./product"
import category from "./category"

router.use("/product", product)
router.use("/category", category)
module.exports = router