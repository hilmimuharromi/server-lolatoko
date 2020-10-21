import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    costProduction: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    }
});

const product = mongoose.model("product", productSchema);
export default product;