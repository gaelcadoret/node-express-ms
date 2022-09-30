import { Companies } from "../../../../db.js";

import { sendErrorResponse, sendSuccessResponse } from "../../../helpers/index.js";

export const createCompany = (req, res) => {
    return res.json(sendSuccessResponse(res, "createCompany ok"))
}

export const getAllCompanies = async (req, res) => {
    const companies = await Companies.findAll();
    return res.json(sendSuccessResponse(res, companies));
}
