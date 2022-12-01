import { Companies } from "../../../../db.js";

import { sendErrorResponse, sendSuccessResponse } from "../../../helpers/index.js";

export const createCompany = (req, res) => {
    return res.json(sendSuccessResponse(res, "createCompany ok"))
}

// const tryCatch = (fnTry) => {
//     try {
//         if (typeof fnTry === "function") return fnTry();
//     } catch (e) {
//         console.error("Global error has been catched", e);
//         return sendErrorResponse(...arguments);
//     }
// };

const tryCatch = (tryer, catcher) => function () {
    const [req, res] = arguments;

    try {
        console.log("typeof fn", typeof tryer);

        if (typeof tryer === "function") {
            return tryer.call(...arguments);
        }

        // return res.status(500).send("argument type must be a function!");
    } catch (error) {
        console.error("Global error has been catched", error);

        if (typeof catcher === "function") {
            return catcher.call(error);
        }

        // return res.status(500).send(error.message);
    }
};

export const getAllCompanies = async (req, res) =>
    tryCatch(
        async () => {
            console.log("tryer has been called!");
            const companies = await Companies.findAll();
            throw new Error("PAF !");
            return sendSuccessResponse(res, companies);
        },
        () => {
            console.log("catcher has been called!");
        }
    )(req, res);
