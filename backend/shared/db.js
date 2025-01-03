import mongoose from "mongoose";
export const createConnection = async () => {
    try {
        const conInfo = await mongoose.connect(process.env.DB_URL);
        return conInfo;
    } catch (error) {
        console.log("connecton failed...", error);
        throw error;
    }
};