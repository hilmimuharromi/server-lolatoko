import express from 'express'
import { getAllCategory, addCategory, deleteCategory, putCategory } from "../controller/category"
const router = express.Router()

router.get("/", getAllCategory)
router.post("/", addCategory)
router.delete("/:id", deleteCategory)
router.put("/:id", putCategory)
export default router
