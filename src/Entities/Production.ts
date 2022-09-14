import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const productionSchema = new Schema(
    {
        quantityLiters: { type: Number, required: true },
        farmerId: { type: String, ref: "farmers", required: true },
        dateRegistered: { type: Date, required: true }
    },
    { timestamps: true }
);

export default mongoose.model("productions", productionSchema);