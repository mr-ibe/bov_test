import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const farmSchema = new Schema(
    {
        farmName: { type: String, required: true },
        factoryDistance: { type: Number, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("farms", farmSchema);