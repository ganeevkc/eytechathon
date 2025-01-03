import mongoose, {SchemaTypes} from "mongoose";
import hashPassword from "../../middleware/hashPassword.js";
import comparePassword from "../../middleware/comparePassword.js";
const userSchema = mongoose.Schema({
    name: {
        type: SchemaTypes.String,
        required: true,
    },
    contactNo: {
        type: SchemaTypes.Number,
        required: true,
    }, 
    email: {
        type: SchemaTypes.String,
    },
    password: {
        type: SchemaTypes.String,
        required: true,
    }
});

userSchema.pre("save", hashPassword);
userSchema.methods.comparePassword = comparePassword;
const User = mongoose.model("User", userSchema);
export default User;