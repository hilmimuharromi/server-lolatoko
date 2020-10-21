import express from 'express'
import { GetAllProducts } from "../controller/product"
const router = express.Router()

router.get("/", GetAllProducts)

export default router
