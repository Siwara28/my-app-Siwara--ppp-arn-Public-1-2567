//models\ProductModel.js
import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    impiement: { type: String, required: true },
    emil: { type: Number, required: true },
    modile: { type: Number, required: true },
    bunget: { type: Number, required: true },
    year: { type: Number, required: true },
    eveluation: { type: Number, required: true },
    weak: { type: Number, required: true },
    strength: { type: Number, required: true },
    development: { type: Number, required: true },
    suggestion: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", topicSchema);

export default ProductModel;
