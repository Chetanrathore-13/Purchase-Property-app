import mongoose from "mongoose";

const propertyFeatureSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  icon: { type: String, required: true } // URL of the icon/image
}, { timestamps: true });

export default mongoose.model("PropertyFeature", propertyFeatureSchema);
