import { Category } from "../model"
const getAllCategory = async (req, res) => {
    const result = await Category.find()
    return res.status(200).json(result)
}

const addCategory = async (req, res) => {
    const { code, name, imageUrl } = req.body
    const result = await Category.create({
        code,
        name,
        imageUrl
    })
    return res.status(201).json(result)
}

const deleteCategory = async (req, res) => {
    const { id } = req.params
    let result;
    if (id === "ALL") result = await Category.deleteMany({})
    else result = await Category.deleteOne({ _id: id })
    return res.status(201).json(result)
}

const putCategory = async (req, res) => {
    const { id } = req.params
    const { name, imageUrl } = req.body
    const result = await Category.updateOne({ _id: id }, { name, imageUrl })
    return res.status(201).json(result)

}

export { getAllCategory, addCategory, deleteCategory, putCategory }