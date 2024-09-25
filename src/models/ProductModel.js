//models\ProductModel.js
import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    name: { type: String, required: true },
    project: { type: String, required: true },
    implementation: { type: String, required: true },
    emil: { type: Number, required: true },
    mobile: { type: Number, required: true },
    budget: { type: Number, required: true },
    year: { type: Number, required: true },
    evaluation: { type: Number, required: true },
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
