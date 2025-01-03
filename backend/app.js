import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./modules/routes/user-routes.js";
import { createConnection } from "./shared/db.js";
import schemeRoutes from "./modules/routes/scheme-routes.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/schemes", schemeRoutes);
const promise = createConnection();
promise.then(()=>{
    console.log("Connection established.");
    const server = app.listen(process.env.PORT || 1111, (error) => {
        if (error) console.log("Error found.");
        else console.log("Server up and running.", server.address().port);
    });
}).catch((error) => {
    console.log("Server down...", error);
    throw error;
});