import { Router } from "express";
import login from "./components/Login/routes.js";

export default (app) => {
    const router = Router({ mergeParams: true });

    app.get("/healthz", (req, res) => {
        res.json({
            success: true,
            data: "micro-services is still alive.",
            timestamp: Date.now()
        });
    });

    router.use("/login", login);

    app.use("/", router);

    router.all("*", (req, res) => {
        return res.status(404).json({
            success: false,
            error: `Cannot find route ${req.originalUrl}`,
            timestamp: Date.now()
        })
    });
}


