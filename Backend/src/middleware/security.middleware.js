import express from "express";
import helmet from "helmet";
import hpp from "hpp";
import compression from "compression";
import cors from "cors";
import rateLimit from "express-rate-limit";
import env from "../config/env.js"
import CookieParser from "cookie-parser";


export default function securityMiddleware(app) {


    app.use(cors({
        origin: env.CORS_ORIGIN.split(",").map((origin) => origin.trim()),
        credentials: true
    }))

    app.use(rateLimit({
        windowMs: env.RATELIMIT_WINDOW_MS,
        limit: env.RATELIMIT,
        legacyHeaders: true,
        message: "too many request try again after few minutes"
    }));
    app.use(
        helmet({
            crossOriginResourcePolicy: {
                policy: "cross-origin",
            },
        })
    );
    app.use(hpp());
    app.use(CookieParser());
    app.use(compression());
    app.use(express.json({ limit: "3mb" }));
    app.use(express.urlencoded({ extended: true, limit: "3mb" }));
}
