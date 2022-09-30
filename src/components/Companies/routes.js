import { Router } from "express";
import {expressjwt} from "express-jwt";

import { createCompany, getAllCompanies } from "./controllers/index.js";
import { JWT_SECRET } from "../../../config/env.js";

const router = Router();

router.post("/", expressjwt({
    secret: JWT_SECRET,
    algorithms: ['HS256']
}), createCompany);

router.get("/", getAllCompanies);

export default router;
