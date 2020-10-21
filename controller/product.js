import { Product } from "../model"
const GetAllProducts = async (req, res) => {
    const result = await Product.find()
    console.log(result)
    return res.status(200).json(result)
}

export { GetAllProducts }