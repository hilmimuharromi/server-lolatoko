import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: Number,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
    },
});

const category = mongoose.model("category", categorySchema);
export default category;