import express from "express";
import { filterSchemes } from "../controllers/schema-controller.js";

const schemeRoutes = express.Router();
schemeRoutes.post("/filter-schemes", filterSchemes);

export default schemeRoutes;