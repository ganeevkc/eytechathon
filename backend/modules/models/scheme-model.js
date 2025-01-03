import mongoose, {SchemaTypes} from "mongoose";
//model not needed tho
const schemeSchema = mongoose.Schema({
    gender: {
        type: SchemaTypes.String,
        required: true,
    },
    age: {
        type: SchemaTypes.Number,
    },
    caste: {
        type: SchemaTypes.String,
    },
    location: {
        type: SchemaTypes.String,
        requiredd: true
    },
    marital_status: {
        type: SchemaTypes.String,
        default: "null",
    }
});
const Scheme = mongoose.model("Scheme", schemeSchema);
export default Scheme;