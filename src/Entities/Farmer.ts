import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const farmerSchema = new Schema(
    {
        farmerName: { type: String, required: true },
        farmId: { type: String, ref: "farms", required: true },
    },
    { timestamps: true }
);

export default mongoose.model("farmers", farmerSchema);